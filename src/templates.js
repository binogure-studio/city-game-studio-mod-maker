import React, { useEffect, useRef, useState } from 'react'
import { utils } from '@rjsf/core'
import {
  DOC_URL, REPO_URL, cleanTitle, prettyKey, sectionLabel, groupSections, countEntries, errorPath, errorFieldId
} from './sections'

const ITEM_LABEL_KEYS = ['name', 'label', 'magazine', 'difficulty', 'original_name', 'company', 'id']

function itemLabel(data) {
  if (data == null || typeof data !== 'object') {
    return null
  }

  for (let key of ITEM_LABEL_KEYS) {
    let value = data[key]

    if ((typeof value === 'string' && value.trim() !== '') || typeof value === 'number') {
      return String(value)
    }
  }

  return null
}

function docLink(schema) {
  let id = schema && schema.items && schema.items.$id

  return id ? DOC_URL + id.replace(/\.json$/, '.md') : null
}

/* ---------- Fields ---------- */

export function FieldTemplate(props) {
  const { id, classNames, label, children, rawErrors, rawDescription, rawHelp, hidden, required, displayLabel } = props

  if (hidden) {
    return <div hidden>{children}</div>
  }

  let hasErrors = rawErrors && rawErrors.length > 0

  // Free key/value entries (e.g. translation messages)
  if (props.schema.hasOwnProperty(utils.ADDITIONAL_PROPERTY_FLAG)) {
    return (
      <div className={classNames + ' cgs-pair' + (hasErrors ? ' has-error' : '')}>
        <input className="form-control" type="text" id={`${id}-key`} aria-label="Key" defaultValue={label}
          onBlur={(event) => props.onKeyChange(event.target.value)} />
        <div className="cgs-pair-value">{children}</div>
        <button type="button" className="cgs-icon-btn cgs-danger" title="Remove" aria-label="Remove"
          disabled={props.disabled || props.readonly} onClick={props.onDropPropertyClick(label)}>✕</button>
      </div>
    )
  }

  return (
    <div className={classNames + (hasErrors ? ' has-error' : '')}>
      {displayLabel && label && (
        <label htmlFor={id} className="control-label" title={label}>
          {prettyKey(cleanTitle(label))}
          {required && <span className="cgs-required" aria-label="required">*</span>}
        </label>
      )}
      {displayLabel && rawDescription && <p className="field-description">{rawDescription}</p>}
      {children}
      {hasErrors && (
        <ul className="cgs-field-errors">
          {rawErrors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      )}
      {rawHelp && <p className="help-block">{rawHelp}</p>}
    </div>
  )
}

/* ---------- Objects ---------- */

export function ObjectFieldTemplate(props) {
  let id = props.idSchema.$id

  if (id === 'root') {
    return <RootLayout {...props} />
  }

  // Section objects and array entries: the panel / entry header already shows the title
  let sectionKeys = (props.formContext && props.formContext.sectionKeys) || []
  let isSection = id.startsWith('root_') && sectionKeys.includes(id.slice(5))

  if (isSection || /_\d+$/.test(id)) {
    return <div className="cgs-section-body">{props.properties.map((p) => p.content)}</div>
  }

  return (
    <fieldset className="cgs-group" id={id}>
      {props.title && <legend>{prettyKey(cleanTitle(props.title))}</legend>}
      {props.description && <p className="field-description">{props.description}</p>}
      {props.properties.map((p) => p.content)}
      {utils.canExpand(props.schema, props.uiSchema, props.formData) && (
        <button type="button" className="cgs-btn cgs-btn-add" onClick={props.onAddClick(props.schema)}
          disabled={props.disabled || props.readonly}>
          <span aria-hidden="true">+</span> Add key
        </button>
      )}
    </fieldset>
  )
}

function RootLayout({ properties, schema, formData, formContext }) {
  const { active, go, errors, jumpToError } = formContext
  let keys = properties.map((p) => p.name)
  let groups = groupSections(keys)
  let data = formData || {}
  let errorCount = {}

  ;(errors || []).forEach((error) => {
    let section = errorPath(error.property)[0]

    errorCount[section] = (errorCount[section] || 0) + 1
  })

  let current = keys.includes(active) ? active : null
  let filled = keys.filter((key) => countEntries(data[key]) > 0)
  const nav = useRef(null)

  // Keep the active entry visible (horizontal menu on small screens)
  useEffect(() => {
    let item = nav.current && nav.current.querySelector('.is-active')

    if (item && nav.current.scrollWidth > nav.current.clientWidth) {
      nav.current.scrollLeft = item.offsetLeft - 16
    }
  }, [current])

  return (
    <div className="cgs-layout">
      <nav className="cgs-sidebar" aria-label="Mod sections" ref={nav}>
        <button type="button" className={'cgs-nav-item' + (current === null ? ' is-active' : '')} onClick={() => go(null)}>
          <span className="cgs-nav-label">Overview</span>
        </button>
        {groups.map((group) => (
          <div className="cgs-nav-group" key={group.label}>
            <div className="cgs-nav-heading">{group.label}</div>
            {group.sections.map((key) => {
              let count = countEntries(data[key])

              return (
                <button
                  type="button"
                  key={key}
                  className={'cgs-nav-item' + (current === key ? ' is-active' : '') + (errorCount[key] ? ' has-error' : '')}
                  aria-current={current === key ? 'page' : undefined}
                  onClick={() => go(key)}
                >
                  <span className="cgs-nav-label">{sectionLabel(key, schema.properties[key])}</span>
                  {errorCount[key] > 0 && <span className="cgs-nav-error" title={`${errorCount[key]} problem(s)`}>{errorCount[key]}</span>}
                  {count > 0 && <span className="cgs-nav-count">{count}</span>}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      <main className="cgs-main">
        {errors && errors.length > 0 && (
          <ProblemList errors={errors} schema={schema} jumpToError={jumpToError} />
        )}

        {current === null && <Overview schema={schema} data={data} filled={filled} go={go} />}

        {properties.map((p) => {
          let sectionSchema = schema.properties[p.name] || {}

          return (
            <section key={p.name} className="cgs-section" hidden={current !== p.name} aria-labelledby={`title-${p.name}`}>
              <header className="cgs-section-header">
                <h2 id={`title-${p.name}`}>{sectionLabel(p.name, sectionSchema)}</h2>
                {sectionSchema.description && <p>{sectionSchema.description}</p>}
              </header>
              {p.content}
            </section>
          )
        })}
      </main>
    </div>
  )
}

function Overview({ schema, data, filled, go }) {
  return (
    <section className="cgs-overview">
      <h2>Build a mod for City Game Studio</h2>
      <ol className="cgs-steps">
        <li>Pick a section in the menu and add your content: platforms, competitors, themes, events and more.</li>
        <li>Click <b>Download mod.zip</b> and extract it into a new, empty folder.</li>
        <li>In City Game Studio, create a new mod, select that folder, then click <b>Create</b>.</li>
      </ol>
      <p className="cgs-muted">
        Your work is saved in this browser as you type. Use <b>Open</b> to continue an existing mod: a <code>mod.zip</code> brings back
        your images too, a <code>mod.json</code> only the text.
      </p>

      <h3>Your mod</h3>
      {filled.length === 0 ? (
        <p className="cgs-empty">Your mod is empty. Choose a section in the menu to add your first entry.</p>
      ) : (
        <ul className="cgs-summary">
          {filled.map((key) => (
            <li key={key}>
              <button type="button" onClick={() => go(key)}>
                <span>{sectionLabel(key, schema.properties[key])}</span>
                <span className="cgs-nav-count">{countEntries(data[key])}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="cgs-links">
        <a href={DOC_URL + 'README.md'} target="_blank" rel="noopener noreferrer">Field reference</a>
        <a href={REPO_URL + '#short-video-on-how-to-make-a-mod'} target="_blank" rel="noopener noreferrer">Video tutorial</a>
        <a href={REPO_URL} target="_blank" rel="noopener noreferrer">GitHub repository</a>
      </p>
    </section>
  )
}

function ProblemList({ errors, schema, jumpToError }) {
  return (
    <div className="cgs-problems" role="alert">
      <h2>{errors.length === 1 ? '1 problem blocks the download' : `${errors.length} problems block the download`}</h2>
      <ul>
        {errors.map((error, index) => {
          let path = errorPath(error.property)
          let where = []

          if (path.length > 0) {
            where.push(sectionLabel(path[0], schema.properties[path[0]]))
          }

          if (path.length > 2 && /^\d+$/.test(path[2])) {
            where.push(`entry #${Number(path[2]) + 1}`)
          }

          if (path.length > 3) {
            where.push(prettyKey(path[path.length - 1]))
          }

          return (
            <li key={index}>
              <button type="button" onClick={() => jumpToError(error.property)}>
                <b>{where.join(' › ')}</b> {error.message}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ---------- Arrays ---------- */

export function ArrayFieldTemplate(props) {
  const { items, canAdd, onAddClick, title, schema, uiSchema, formData, idSchema, disabled, readonly } = props
  let doc = docLink(schema)
  let description = uiSchema['ui:description'] || schema.description
  let heading = cleanTitle(uiSchema['ui:title'] || title)

  return (
    <div className="cgs-array" id={idSchema.$id}>
      <div className="cgs-array-header">
        <div>
          <h3>{prettyKey(heading)}</h3>
          {description && <p>{description}</p>}
        </div>
        {doc && <a className="cgs-doc-link" href={doc} target="_blank" rel="noopener noreferrer">Field reference</a>}
      </div>

      {items.length === 0 && <p className="cgs-empty">No entries yet.</p>}

      {items.map((item) => (
        <ArrayItem key={item.key} item={item} label={itemLabel((formData || [])[item.index])} />
      ))}

      {canAdd && !disabled && !readonly && (
        <button type="button" className="cgs-btn cgs-btn-add" onClick={onAddClick}>
          <span aria-hidden="true">+</span> Add entry
        </button>
      )}
    </div>
  )
}

function ArrayItem({ item, label }) {
  const stop = (handler) => (event) => {
    event.preventDefault()
    event.stopPropagation()
    handler(event)
  }

  return (
    <details className="cgs-item" open>
      <summary>
        <span className="cgs-item-index">#{item.index + 1}</span>
        <span className="cgs-item-label">{label || 'New entry'}</span>
        {item.hasToolbar && (
          <span className="cgs-item-tools">
            {(item.hasMoveUp || item.hasMoveDown) && (
              <>
                <button type="button" className="cgs-icon-btn" title="Move up" aria-label="Move up"
                  disabled={!item.hasMoveUp} onClick={stop(item.onReorderClick(item.index, item.index - 1))}>▲</button>
                <button type="button" className="cgs-icon-btn" title="Move down" aria-label="Move down"
                  disabled={!item.hasMoveDown} onClick={stop(item.onReorderClick(item.index, item.index + 1))}>▼</button>
              </>
            )}
            {item.hasRemove && (
              <button type="button" className="cgs-icon-btn cgs-danger" title="Remove" aria-label="Remove"
                onClick={stop(item.onDropIndexClick(item.index))}>✕</button>
            )}
          </span>
        )}
      </summary>
      <div className="cgs-item-body">{item.children}</div>
    </details>
  )
}

/* ---------- Images ---------- */

function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()

    reader.onerror = reject
    reader.onload = (event) => {
      resolve(event.target.result.replace(';base64', `;name=${encodeURIComponent(file.name)};base64`))
    }
    reader.readAsDataURL(file)
  })
}

export function fileNameFromDataURL(dataURL) {
  let match = /;name=([^;]+)/.exec(dataURL || '')

  return match ? decodeURIComponent(match[1]) : null
}

export function ImageWidget({ id, value, disabled, readonly, onChange, options, schema, autofocus }) {
  const [size, setSize] = useState(null)
  let expectedX = schema.image_size_x
  let expectedY = schema.image_size_y
  let accept = options.accept ? options.accept.join(',') : 'image/*'
  let wrongSize = size && expectedX && expectedY && (size.x !== expectedX || size.y !== expectedY)

  const handleChange = (event) => {
    let file = event.target.files && event.target.files[0]

    if (file) {
      readAsDataURL(file).then((dataURL) => {
        setSize(null)
        onChange(dataURL)
      })
    }

    event.target.value = ''
  }

  return (
    <div className={'cgs-image' + (value ? ' has-image' : '') + (wrongSize ? ' is-wrong' : '')}>
      <div className="cgs-image-drop">
        {value ? (
          <img src={value} alt="" onLoad={(event) => setSize({ x: event.target.naturalWidth, y: event.target.naturalHeight })} />
        ) : (
          <span>Drop an image or click to browse</span>
        )}
        <input id={id} type="file" accept={accept} disabled={disabled || readonly} autoFocus={autofocus} onChange={handleChange}
          title={value ? 'Replace image' : 'Choose image'} />
      </div>
      <div className="cgs-image-meta">
        {value ? <b>{fileNameFromDataURL(value) || 'image'}</b> : <span className="cgs-muted">No image</span>}
        {size && <span>{size.x} × {size.y} px</span>}
        {expectedX && expectedY && <span className="cgs-muted">Expected: {expectedX} × {expectedY} px</span>}
        {wrongSize && <span className="cgs-warning">This image does not have the expected size.</span>}
        {value && !disabled && !readonly && (
          <button type="button" className="cgs-link-btn" onClick={() => { setSize(null); onChange(undefined) }}>Remove</button>
        )}
      </div>
    </div>
  )
}

export { errorFieldId }
