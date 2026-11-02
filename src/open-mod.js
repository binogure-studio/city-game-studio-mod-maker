import JSZip from 'jszip'

const MIME_TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml' }

function isPlainObject(value) {
  return value != null && typeof value === 'object' && !Array.isArray(value)
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()

    reader.onerror = reject
    reader.onload = (event) => resolve(event.target.result.split(',')[1])
    reader.readAsDataURL(file)
  })
}

// "a/b/../c/./d.png" -> "a/c/d.png", backslashes from Windows paths included
function normalizePath(path) {
  let parts = []

  path.replace(/\\/g, '/').split('/').forEach((part) => {
    if (part === '..') {
      parts.pop()
    } else if (part !== '' && part !== '.') {
      parts.push(part)
    }
  })

  return parts.join('/')
}

function dirname(path) {
  let index = path.lastIndexOf('/')

  return index === -1 ? '' : path.slice(0, index + 1)
}

// Every selected file becomes an entry; zip archives are expanded (paths prefixed by the archive name)
async function collectEntries(files) {
  let entries = []

  for (let file of files) {
    if (/\.zip$/i.test(file.name)) {
      let zip = await JSZip.loadAsync(file)

      zip.forEach((relativePath, entry) => {
        if (!entry.dir && !relativePath.startsWith('__MACOSX/')) {
          entries.push({
            path: normalizePath(`${file.name}/${relativePath}`),
            text: () => entry.async('string'),
            base64: () => entry.async('base64')
          })
        }
      })
    } else {
      entries.push({
        path: normalizePath(file.webkitRelativePath || file.name),
        text: () => file.text(),
        base64: () => fileToBase64(file)
      })
    }
  }

  return entries
}

// Lists are concatenated (platform.add from every file), objects merged key by key
export function mergeMods(target, source) {
  Object.keys(source).forEach((key) => {
    let current = target[key]
    let next = source[key]

    if (Array.isArray(current) && Array.isArray(next)) {
      target[key] = current.concat(next)
    } else if (isPlainObject(current) && isPlainObject(next)) {
      mergeMods(current, next)
    } else {
      target[key] = next
    }
  })

  return target
}

const byPath = (a, b) => a.path.localeCompare(b.path, undefined, { numeric: true })

// Reads .json / .zip / image files (or a whole folder) and returns one merged mod.
// Images are looked up next to the JSON file that references them.
export async function readModFiles(files, uiSchema, walkImages) {
  let entries = await collectEntries(files)
  let jsonEntries = entries.filter((entry) => /\.json$/i.test(entry.path)).sort(byPath)
  let index = {}
  let merged = {}
  let missing = []
  let images = 0

  if (jsonEntries.length === 0) {
    throw new Error('No JSON file found in the selection.')
  }

  let byName = {}

  entries.forEach((entry) => {
    let name = entry.path.split('/').pop().toLowerCase()

    index[entry.path.toLowerCase()] = entry
    byName[name] = byName[name] ? null : entry
  })

  // Exact path next to the JSON first. Loose files carry no folder, so fall back to the
  // file name, only when a single selected file has that name.
  const findImage = (folder, name) => {
    return index[normalizePath(folder + name).toLowerCase()] || byName[name.split('/').pop().toLowerCase()] || null
  }

  for (let jsonEntry of jsonEntries) {
    let data

    try {
      data = JSON.parse(await jsonEntry.text())
    } catch (error) {
      throw new Error(`${jsonEntry.path} is not valid JSON (${error.message}).`)
    }

    if (!isPlainObject(data)) {
      throw new Error(`${jsonEntry.path} is not a mod file: it must contain a JSON object.`)
    }

    let folder = dirname(jsonEntry.path)
    let pending = []

    walkImages(data, uiSchema, (parent, key) => {
      let name = parent[key]
      let image = typeof name === 'string' && !name.startsWith('data:') ? findImage(folder, name) : null

      if (image == null) {
        if (typeof name === 'string' && !name.startsWith('data:')) {
          missing.push(name)
        }

        delete parent[key]

        return
      }

      let mime = MIME_TYPES[name.split('.').pop().toLowerCase()] || 'application/octet-stream'
      let filename = name.split('/').pop()

      pending.push(image.base64().then((base64) => {
        parent[key] = `data:${mime};name=${encodeURIComponent(filename)};base64,${base64}`
      }))
    })

    await Promise.all(pending)
    images += pending.length
    mergeMods(merged, data)
  }

  return { data: merged, jsonFiles: jsonEntries.map((entry) => entry.path), images, missing }
}
