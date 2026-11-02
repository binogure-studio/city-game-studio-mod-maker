import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import JSZip from 'jszip'
import Form from '@rjsf/core'

import schema from './schemas.json'
import ui_schema from './ui-schemas.json'
import { FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate, ImageWidget, fileNameFromDataURL, errorFieldId } from './templates'
import { readModFiles } from './open-mod'
import { applyExclusiveFields, exclusiveErrors, ExclusiveListsField } from './exclusive'
import './theme.css'

const DRAFT_KEY = 'cgs-modmaker-draft'
const FORM_ID = 'mod-form'

// Multiple choice lists (genres...) the user never touched stay undefined and
// fail "required" even with minItems: 0. Start them as empty lists instead.
function defaultMultiSelects(node) {
  if (node == null || typeof node !== 'object') {
    return
  }

  if (node.type === 'array' && node.items && Array.isArray(node.items.enum) && node.default === undefined) {
    node.default = []
  }

  Object.keys(node).forEach((key) => defaultMultiSelects(node[key]))
}

defaultMultiSelects(schema)
applyExclusiveFields(schema, ui_schema)

const SECTION_KEYS = Object.keys(schema.properties || {})

function dataURItoBlob(dataURI) {
  let byteString = atob(dataURI.split(',')[1])
  let ia = new Uint8Array(byteString.length)

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new Blob([ia])
}

function isImageField(ui) {
  return ui != null && ui['ui:options'] != null && ui['ui:options'].accept != null
}

// Calls fn(parent, key) for every image field found in data
function walkImages(data, ui, fn) {
  if (data == null || ui == null || typeof data !== 'object') {
    return
  }

  if (Array.isArray(data)) {
    data.forEach((item) => walkImages(item, ui.items, fn))

    return
  }

  Object.keys(data).forEach((key) => {
    if (isImageField(ui[key])) {
      fn(data, key)
    } else {
      walkImages(data[key], ui[key], fn)
    }
  })
}

// Translation lists stored as [{label, translation}] in the form
function flattenArrays(data, ui) {
  if (data == null || ui == null || typeof data !== 'object') {
    return
  }

  if (Array.isArray(data)) {
    data.forEach((item) => flattenArrays(item, ui.items))

    return
  }

  Object.keys(data).forEach((key) => {
    if (ui[key] == null) {
      return
    }

    if (ui[key].items != null && ui[key].items.array && Array.isArray(data[key])) {
      data[key] = data[key].reduce((acc, item) => {
        acc[item.label] = item.translation

        return acc
      }, {})
    } else if (!isImageField(ui[key])) {
      flattenArrays(data[key], ui[key])
    }
  })
}

function readDraft() {
  try {
    let raw = window.localStorage.getItem(DRAFT_KEY)

    return raw ? JSON.parse(raw) : {}
  } catch (error) {
    return {}
  }
}

function writeDraft(data) {
  try {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(data))
  } catch (error) {
    // Quota exceeded (large images) or storage disabled: keep working without the draft
  }
}

function sectionFromHash() {
  let hash = decodeURIComponent(window.location.hash.replace(/^#/, ''))

  return hash || null
}

function App() {
  const [formData, setFormData] = useState(readDraft)
  const [formKey, setFormKey] = useState(0)
  const [active, setActive] = useState(sectionFromHash)
  const [errors, setErrors] = useState([])
  const [notice, setNotice] = useState(null)
  const fileInput = useRef(null)
  const folderInput = useRef(null)
  const saveTimer = useRef(null)

  useEffect(() => {
    const onPop = () => setActive(sectionFromHash())

    window.addEventListener('popstate', onPop)

    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => writeDraft(formData), 500)
  }, [formData])

  useEffect(() => {
    if (notice == null) {
      return undefined
    }

    let timer = setTimeout(() => setNotice(null), 4000)

    return () => clearTimeout(timer)
  }, [notice])

  const go = useCallback((section) => {
    window.history.pushState(null, '', section ? `#${encodeURIComponent(section)}` : window.location.pathname + window.location.search)
    setActive(section)
    window.scrollTo(0, 0)
  }, [])

  const jumpToError = useCallback((property) => {
    let parts = errorFieldId(property).split('_')

    go(parts[1] || null)

    // Wait for the section to be visible, then reveal the closest existing node
    setTimeout(() => {
      for (let length = parts.length; length > 1; length--) {
        let element = document.getElementById(parts.slice(0, length).join('_'))

        if (element) {
          for (let details = element.closest('details'); details; details = details.parentElement.closest('details')) {
            details.open = true
          }

          element.scrollIntoView({ block: 'center' })

          if (typeof element.focus === 'function') {
            element.focus({ preventScroll: true })
          }

          break
        }
      }
    }, 0)
  }, [go])

  const showErrors = (list) => {
    setErrors(list)
    window.scrollTo(0, 0)
  }

  const handleSubmit = ({ formData: data }) => {
    let conflicts = exclusiveErrors(schema, data)

    if (conflicts.length > 0) {
      showErrors(conflicts)

      return
    }

    let zip = new JSZip()
    let cloned = JSON.parse(JSON.stringify(data))
    let usedNames = {}

    flattenArrays(cloned, ui_schema)
    walkImages(cloned, ui_schema, (parent, key) => {
      let dataURL = parent[key]

      if (typeof dataURL !== 'string' || !dataURL.startsWith('data:')) {
        return
      }

      // Two different images may share the same file name: keep both
      let filename = fileNameFromDataURL(dataURL) || `${key}.png`
      let base = filename.replace(/(\.[^.]*)?$/, '')
      let extension = filename.slice(base.length)

      for (let index = 2; usedNames[filename] != null && usedNames[filename] !== dataURL; index++) {
        filename = `${base}-${index}${extension}`
      }

      usedNames[filename] = dataURL
      zip.file(filename, dataURItoBlob(dataURL))
      parent[key] = filename
    })

    zip.file('mod.json', JSON.stringify(cloned, null, 2))
    zip.generateAsync({ type: 'blob' }).then((blob) => {
      let url = URL.createObjectURL(blob)
      let anchor = document.createElement('a')

      anchor.href = url
      anchor.download = 'mod.zip'
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    })

    setErrors([])
    setNotice({ type: 'success', text: 'mod.zip downloaded. Extract it into an empty folder, then create the mod in the game.' })
  }

  const handleError = (validationErrors) => {
    showErrors(validationErrors.concat(exclusiveErrors(schema, formData)))
  }

  const loadData = (data) => {
    setFormData(data)
    setErrors([])
    setFormKey((key) => key + 1)
  }

  const openFiles = async (event) => {
    let files = Array.from((event.target.files) || [])

    event.target.value = ''

    if (files.length === 0) {
      return
    }

    try {
      let { data, jsonFiles, images, missing } = await readModFiles(files, ui_schema, walkImages)
      let opened = jsonFiles.length === 1 ? jsonFiles[0] : `${jsonFiles.length} JSON files merged`
      let text = `${opened}, ${images} image(s) loaded.`

      if (missing.length > 0) {
        text += ` Not found: ${Array.from(new Set(missing)).join(', ')}. Open the mod folder or its .zip, or add them again.`
      }

      loadData(data)
      go(null)
      setNotice({ type: missing.length > 0 ? 'warning' : 'success', text })
    } catch (error) {
      setNotice({ type: 'error', text: `Nothing was opened: ${error.message}` })
    }
  }

  const newMod = () => {
    if (window.confirm('Start a new mod? Everything you entered will be cleared.')) {
      loadData({})
      go(null)
    }
  }

  return (
    <>
      <header className="cgs-topbar">
        <div className="cgs-brand">
          <span className="cgs-brand-mark" aria-hidden="true">CGS</span>
          <span className="cgs-brand-text">
            <b>Mod Maker</b>
            <span>City Game Studio: A tycoon about game dev</span>
          </span>
        </div>
        <div className="cgs-actions">
          <button type="button" className="cgs-btn cgs-btn-ghost" onClick={newMod}>New</button>
          <button type="button" className="cgs-btn cgs-btn-ghost" onClick={() => fileInput.current.click()}
            title="One or more .json files, .zip archives and their images">Open files</button>
          <button type="button" className="cgs-btn cgs-btn-ghost" onClick={() => folderInput.current.click()}
            title="A mod folder: every .json file inside is merged">Open folder</button>
          <input ref={fileInput} type="file" hidden multiple accept=".json,.zip,image/*,application/json,application/zip" onChange={openFiles} />
          <input ref={folderInput} type="file" hidden webkitdirectory="" directory="" onChange={openFiles} />
          <button type="submit" form={FORM_ID} className="cgs-btn cgs-btn-gold">Download mod.zip</button>
        </div>
      </header>

      {notice && (
        <div className={`cgs-notice is-${notice.type}`} role="status">
          <span>{notice.text}</span>
          <button type="button" className="cgs-link-btn" onClick={() => setNotice(null)}>Dismiss</button>
        </div>
      )}

      <Form
        key={formKey}
        id={FORM_ID}
        schema={schema}
        uiSchema={ui_schema}
        formData={formData}
        onChange={({ formData: data }) => setFormData(data)}
        onSubmit={handleSubmit}
        onError={handleError}
        showErrorList={false}
        noHtml5Validate
        formContext={{ active, go, errors, jumpToError, sectionKeys: SECTION_KEYS }}
        FieldTemplate={FieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ArrayFieldTemplate={ArrayFieldTemplate}
        widgets={{ FileWidget: ImageWidget }}
        fields={{ exclusiveLists: ExclusiveListsField }}
      >
        <span hidden />
      </Form>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
