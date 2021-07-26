import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSZip from 'jszip';
import Form from '@rjsf/core';

import schema from './schemas.json';
import ui_schema from './ui-schemas.json';

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  // write the ArrayBuffer to a blob, and you're done
  return new Blob([ab])
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({formData}) {
    let zip = new JSZip()
    let cloned_data = JSON.parse(JSON.stringify(formData));

    const formatData = (_data, _ui_schema) => {

      if (Array.isArray(_data)) {
        _data.forEach((item) => formatData(item, _ui_schema.items))
      } else {
        Object.keys(_data).forEach((key) => {
          if (_ui_schema == null || _ui_schema[key] == null) {
            // NO-OP
          } else if (_ui_schema[key].items != null && _ui_schema[key].items.array) {
            _data[key] = _data[key].reduce((acc, item) => {
              acc[item.label] = item.translation

              return acc
            }, {})
          } else if (_ui_schema[key]['ui:options'] != null && _ui_schema[key]['ui:options'].accept != null) {
            // It is a file
            let file_data = _data[key].split(';')
            let filename = file_data[1].replace('name=', '')

            zip.file(filename, dataURItoBlob(_data[key]))
            _data[key] = filename
          } else {
            formatData(_data[key], _ui_schema[key])
          }
        })
      }
    }

    // Reformat the data
    formatData(cloned_data, ui_schema)

    zip.file('mod.json', JSON.stringify(cloned_data, null, 2))
    zip.generateAsync({type :"base64"} ).then((base64) => {
      let downloadAnchorNode = document.createElement("a")

      downloadAnchorNode.setAttribute("href", "data:application/zip;base64," + base64)
      downloadAnchorNode.setAttribute("download", "mod.zip")
      document.body.appendChild(downloadAnchorNode)
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    })
  }

  render() {
    return (
      <Form schema={schema} uiSchema={ui_schema} onSubmit={this.handleSubmit} >
        <button className="btn btn-info" type="submit" value="Download">Download</button>
      </Form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
