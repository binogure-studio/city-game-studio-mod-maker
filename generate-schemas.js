const path = require('path')
const fs = require('fs')

let p_arguments = process.argv.slice(2);
let main_schema = p_arguments[0]
let output_schema = p_arguments[1]
let output_uischema = p_arguments[2]

let global_schema = require(main_schema)
let global_directory = path.dirname(main_schema)
let global_ui_schema = {}

const load_schema = (schema_data, ui_schema) => {
  if (schema_data != null && schema_data.nyi != null) {
    return {}

  } else if (schema_data != null && schema_data.type == 'image') {
    schema_data.type = 'string'
    schema_data.format = 'data-url'
    ui_schema['ui:options'] = {
      accept: schema_data.image_format.map((item) => `.${item}`)
    }

  } else if (schema_data != null && schema_data.hasOwnProperty('$ref')) {
    return load_schema(require(`${global_directory}/${schema_data['$ref']}`), ui_schema)

  } else if (schema_data != null && schema_data.properties != null) {
    Object.keys(schema_data.properties).forEach((item_key) => {
      ui_schema[item_key] = {}
      schema_data.properties[item_key] = load_schema(schema_data.properties[item_key], ui_schema[item_key])
    })
  } else if (schema_data != null && schema_data.items != null) {
    ui_schema.items = {}
    ui_schema["ui:widget"] = "checkboxes"
    ui_schema["ui:options"] = {
      inline: true
    }
    schema_data.items = load_schema(schema_data.items, ui_schema.items)
  }

  return schema_data
 }

load_schema(global_schema, global_ui_schema)
console.log(output_schema, output_uischema)
fs.writeFileSync(output_schema, JSON.stringify(global_schema, null, 2))
fs.writeFileSync(output_uischema, JSON.stringify(global_ui_schema, null, 2))
