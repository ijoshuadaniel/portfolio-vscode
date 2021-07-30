import React from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import './index.scss'

const FolderListing = ({ filename, children, showChlidren, onClick }) => {
  return (
    <div className='folderListing' onClick={onClick}>
      <div className='folderListing__head'>
        {showChlidren ? <FaAngleDown /> : <FaAngleRight />}
        <span>{filename}</span>
      </div>
      {children && showChlidren && (
        <div className='folderListing__body'>{children}</div>
      )}
    </div>
  )
}

export default FolderListing
