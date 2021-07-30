import React from 'react'
import './index.scss'

const EditorLine = ({ ln, data }) => {
  return (
    <div className='editorLine'>
      <span>{ln}</span>
      <span>{data}</span>
    </div>
  )
}

export default EditorLine
