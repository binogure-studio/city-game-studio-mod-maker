import React from 'react'
import { EXCLUSIVE_LISTS, cleanTitle, prettyKey } from './sections'

// An object qualifies when all its properties are multiple choice lists
// (theme "match", platform "genre": excellent / good / ok / poor). The lists may offer
// different options (a genre missing from one of them). Anything else keeps the default rendering.
function isExclusiveObject(node) {
  let keys = node && node.properties ? Object.keys(node.properties) : []

  return keys.length >= 2 && keys.every((key) => {
    let prop = node.properties[key]

    return prop.type === 'array' && prop.items != null && Array.isArray(prop.items.enum)
  })
}

// Follows a data path ("theme", "add", "match") through the schema, stepping into array items
function resolve(schema, path, visit) {
  let node = schema

  for (let key of path) {
    node = node && node.properties && node.properties[key]

    if (node == null) {
      return null
    }

    visit && visit(key, node)

    if (node.type === 'array' && node.items) {
      node = node.items
      visit && visit('items', node)
    }
  }

  return isExclusiveObject(node) ? node : null
}

// Adds ui:field to the configured objects, if the schema still has the expected shape
export function applyExclusiveFields(schema, uiSchema) {
  EXCLUSIVE_LISTS.forEach((path) => {
    let ui = uiSchema
    let target = resolve(schema, path, (key) => {
      ui[key] = ui[key] || {}
      ui = ui[key]
    })

    if (target) {
      ui['ui:field'] = 'exclusiveLists'
    }
  })
}

function listTitle(node, key) {
  return prettyKey(cleanTitle(node.properties[key].title || key))
}

// Problems with the same shape as rjsf errors: { property, message, stack }
export function exclusiveErrors(schema, formData) {
  let errors = []

  const collect = (data, node, path, property) => {
    if (data == null || typeof data !== 'object') {
      return
    }

    if (path.length === 0) {
      let seen = {}

      Object.keys(node.properties).forEach((key) => {
        (Array.isArray(data[key]) ? data[key] : []).forEach((value) => {
          if (seen[value] != null && seen[value] !== key) {
            let message = `"${value}" is already in ${listTitle(node, seen[value])}`

            errors.push({ property: `${property}.${key}`, message, stack: `${property}.${key} ${message}` })
          } else {
            seen[value] = key
          }
        })
      })

      return
    }

    let [key, ...rest] = path
    let child = node.properties && node.properties[key]

    if (child == null) {
      return
    }

    if (child.type === 'array' && child.items) {
      (Array.isArray(data[key]) ? data[key] : []).forEach((item, index) => {
        collect(item, child.items, rest, `${property}.${key}[${index}]`)
      })
    } else {
      collect(data[key], child, rest, `${property}.${key}`)
    }
  }

  EXCLUSIVE_LISTS.forEach((path) => {
    if (resolve(schema, path)) {
      collect(formData, schema, path, '')
    }
  })

  return errors
}

// Renders the lists together: an option picked in one list is disabled in the others
export function ExclusiveListsField({ schema, formData, onChange, idSchema, errorSchema, disabled, readonly }) {
  let keys = Object.keys(schema.properties)
  let data = formData || {}
  let owners = {}

  keys.forEach((key) => {
    (Array.isArray(data[key]) ? data[key] : []).forEach((value) => {
      owners[value] = (owners[value] || []).concat(key)
    })
  })

  const toggle = (key, value, checked) => {
    let current = Array.isArray(data[key]) ? data[key] : []
    let options = schema.properties[key].items.enum
    let next = checked ? options.filter((option) => option === value || current.includes(option)) : current.filter((option) => option !== value)

    onChange({ ...data, [key]: next })
  }

  return (
    <fieldset className="cgs-group cgs-exclusive" id={idSchema.$id}>
      {schema.title && <legend>{prettyKey(cleanTitle(schema.title))}</legend>}
      {schema.description && <p className="field-description">{schema.description}</p>}
      <p className="cgs-exclusive-hint">Each option can only be in one list. Untick it to move it elsewhere.</p>

      {keys.map((key) => {
        let selected = Array.isArray(data[key]) ? data[key] : []
        let errors = (errorSchema && errorSchema[key] && errorSchema[key].__errors) || []
        let required = (schema.required || []).includes(key)

        return (
          <div className={'form-group' + (errors.length ? ' has-error' : '')} key={key} id={`${idSchema.$id}_${key}`}>
            <div className="control-label">
              {listTitle(schema, key)}
              {required && <span className="cgs-required" aria-label="required">*</span>}
              <span className="cgs-exclusive-count">{selected.length}</span>
            </div>
            <div className="checkboxes" role="group" aria-label={listTitle(schema, key)}>
              {schema.properties[key].items.enum.map((value) => {
                let checked = selected.includes(value)
                let others = (owners[value] || []).filter((owner) => owner !== key)
                let taken = !checked && others.length > 0
                let conflict = checked && others.length > 0

                return (
                  <label
                    key={value}
                    className={'checkbox-inline' + (taken ? ' is-taken' : '') + (conflict ? ' is-conflict' : '')}
                    title={others.length ? `Also in ${others.map((owner) => listTitle(schema, owner)).join(', ')}` : undefined}
                  >
                    <span>
                      <input type="checkbox" checked={checked} disabled={disabled || readonly || taken}
                        onChange={(event) => toggle(key, value, event.target.checked)} />
                      <span>{value}</span>
                    </span>
                  </label>
                )
              })}
            </div>
            {errors.length > 0 && (
              <ul className="cgs-field-errors">{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
            )}
          </div>
        )
      })}
    </fieldset>
  )
}
