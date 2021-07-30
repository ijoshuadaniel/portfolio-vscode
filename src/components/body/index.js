import React, { useState } from 'react'
import SideBar from '@components/sidebar'
import { sidebarFileState } from '@src/utils'
import EditorLine from '../editorline'
import { CusDiv, CusParagraph } from '../customelement'
import './index.scss'

const Body = () => {
  const [sidebarState, setSidebarState] = useState(sidebarFileState.INDEX)
  console.log(sidebarState)
  return (
    <div className='content-body'>
      <div className='content-body__sidebar'>
        <SideBar setSidebarState={setSidebarState} />
      </div>
      <div className='content-body__wrapper'>
        <EditorLine ln='1' data={<CusDiv data={'Hello'} />} />
        <EditorLine ln='2' data={<CusParagraph data='what are you doing' />} />
      </div>
    </div>
  )
}

export default Body
