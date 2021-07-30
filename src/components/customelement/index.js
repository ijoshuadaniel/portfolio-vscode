import React from 'react'
import './index.scss'

export const CusParagraph = ({ data }) => {
  return (
    <div className='cusParagraph'>
      <custom className='cusParagraph_tag'>{'<p>'}</custom>
      <custom className='cusParagraph_data'>{' ' + data + ' '}</custom>
      <custom className='cusParagraph_tag'>{'</p>'}</custom>
    </div>
  )
}

export const CusDiv = ({ data }) => {
  return (
    <div className='cusDiv'>
      <custom className='cusDiv_tag'>{'<div>'}</custom>
      <custom className='cusDiv_data'>{' ' + data + ' '}</custom>
      <custom className='cusDiv_tag'>{'</div>'}</custom>
    </div>
  )
}
