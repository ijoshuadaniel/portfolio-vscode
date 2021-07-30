import React from 'react'
import './index.scss'

const FileListing = ({ icon, filename, border, onFileClick }) => {
  return (
    <div
      className={!border ? 'fileListing' : 'fileListing fileListing__border'}
      onClick={onFileClick}
    >
      {icon}
      <span>{filename}</span>
    </div>
  )
}

export default FileListing
