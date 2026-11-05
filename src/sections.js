// Sidebar layout of the root sections (keys of generic.gd "properties").
// A section missing from this list still shows up, under "Other".
export const GROUPS = [
  {
    label: 'Industry',
    sections: {
      platform: 'Platforms',
      customplatform: 'Custom platform components',
      manufacturer: 'Manufacturers',
      digitalstore: 'Digital store features',
      gameengine: 'Game engine features'
    }
  },
  {
    label: 'Competition',
    sections: {
      concurrent: 'Competitors',
      concurrentgame: 'Competitor games',
      indie: 'Indie companies'
    }
  },
  {
    label: 'Game content',
    sections: {
      genre: 'Genres',
      theme: 'Themes',
      review: 'Magazines & reviews',
      event: 'Events',
      convention: 'Conventions',
      recruitment: 'Famous developers'
    }
  },
  {
    label: 'Game settings',
    sections: {
      difficulty: 'Difficulties',
      speed: 'Game speeds',
      mapsize: 'Map sizes'
    }
  },
  {
    label: 'Localization',
    sections: {
      translation: 'Translations'
    }
  }
]

export const DOC_URL = 'https://github.com/binogure-studio/city-game-studio-mod-maker/blob/master/doc/'
export const REPO_URL = 'https://github.com/binogure-studio/city-game-studio-mod-maker'
export const GAME_URL = 'https://www.city-game-studio.com/'
export const STUDIO_URL = 'https://www.binogure-studio.com/'

// Objects whose lists are mutually exclusive: an option can only be in one of them.
// Data path from the root, array levels are stepped into automatically.
// Ignored (default rendering, no check) if the schema no longer matches.
export const EXCLUSIVE_LISTS = [
  ['theme', 'add', 'match'],
  ['platform', 'add', 'genre']
]

// "Root: Add/rename platform" -> "Add/rename platform"
// "Add theme - genre: Excellent match" -> "Excellent match"
export function cleanTitle(title) {
  if (typeof title !== 'string') {
    return title
  }

  let parts = title.split(': ')

  return parts[parts.length - 1]
}

// "postmortem_ratio" -> "Postmortem ratio"
export function prettyKey(key) {
  if (typeof key !== 'string' || !/^[a-z0-9_-]+$/.test(key)) {
    return key
  }

  let text = key.replace(/[_-]+/g, ' ').trim()

  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function sectionLabel(key, schema) {
  for (let group of GROUPS) {
    if (group.sections[key]) {
      return group.sections[key]
    }
  }

  return cleanTitle((schema && schema.title) || key)
}

// Groups every root key, unknown keys end up in "Other"
export function groupSections(keys) {
  let known = new Set()
  let groups = GROUPS.map((group) => {
    let sections = Object.keys(group.sections).filter((key) => keys.includes(key))

    sections.forEach((key) => known.add(key))

    return { label: group.label, sections }
  })

  let others = keys.filter((key) => !known.has(key))

  if (others.length > 0) {
    groups.push({ label: 'Other', sections: others })
  }

  return groups.filter((group) => group.sections.length > 0)
}

export function countEntries(sectionData) {
  if (sectionData == null || typeof sectionData !== 'object') {
    return 0
  }

  return Object.keys(sectionData).reduce((acc, key) => {
    return acc + (Array.isArray(sectionData[key]) ? sectionData[key].length : 0)
  }, 0)
}

// ".platform.add[0].name" -> ["platform", "add", "0", "name"]
export function errorPath(property) {
  return (property || '').match(/[^.[\]'"]+/g) || []
}

// Same convention as rjsf ids: root_platform_add_0_name
export function errorFieldId(property) {
  return ['root'].concat(errorPath(property)).join('_')
}
