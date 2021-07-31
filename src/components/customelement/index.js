import React from 'react'
import './index.scss'

export const CusParagraph = ({ data }) => {
  return (
    <div className='cusParagraph'>
      <output className='cusParagraph_tag'>{'<p>'}</output>
      <output className='cusParagraph_data'>{' ' + data + ' '}</output>
      <output className='cusParagraph_tag'>{'</p>'}</output>
    </div>
  )
}

export const CusDiv = ({ data }) => {
  return (
    <div className='cusDiv'>
      <output className='cusDiv_tag'>{'<div>'}</output>
      <output className='cusDiv_data'>{' ' + data + ' '}</output>
      <output className='cusDiv_tag'>{'</div>'}</output>
    </div>
  )
}

export const CusImport = ({ name, from }) => {
  return (
    <div className='cusImport'>
      <output className='cusImport_tag'>{'import'}</output>
      <output className='cusImport_data'>{' ' + name + ' '}</output>
      <output className='cusImport_tag'>{'from'}</output>
      <output className='cusImport_data'>{` '${from}' `}</output>
    </div>
  )
}

export const CusExport = ({ name }) => {
  return (
    <div className='cusImport'>
      <output className='cusImport_tag'>{'export default'}</output>
      <output className='cusImport_data'>{' ' + name + ' '}</output>
    </div>
  )
}

export const CusCommon = ({ tag, children, color, prop }) => {
  return (
    <div className='CusCommon'>
      <output className='CusCommon_tag' style={{ color: color }}>
        {prop ? '<' + `${tag} ${prop}` + '>' : '<' + tag + '>'}
      </output>
      <output className='CusCommon_data'>{' ' + children + ' '}</output>
      <output className='CusCommon_tag' style={{ color: color }}>
        {'</' + tag + '>'}
      </output>
    </div>
  )
}

export const CusCommomTag = ({ tag, color, prop }) => {
  return (
    <div className='CusCommon'>
      <output className='CusCommon_tag' style={{ color: color }}>
        {!prop ? tag : '<' + `${tag} ${prop}` + '/>'}
      </output>
    </div>
  )
}

export const CusFunctionStart = ({ name, color }) => {
  return (
    <div className='CusFunctionStart'>
      <output className='CusFunctionStart_tag'>const</output>
      <output className='CusFunctionStart_data'>{` ${name} `}</output>
      <output className='CusFunctionStart_tag'>{`= () => {`}</output>
    </div>
  )
}

export const CusFunctionEnd = () => {
  return (
    <div className='CusFunctionStart'>
      <output className='CusFunctionStart_tag'>{` }`}</output>
    </div>
  )
}
