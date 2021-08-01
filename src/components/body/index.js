import React, { useState } from 'react'
import SideBar from '@components/sidebar'
import { sidebarFileState } from '@src/utils'

import './index.scss'
import {
  IndexJs,
  AppJs,
  ContactJs,
  HomeJs,
  ResumeJS,
  HeaderJs,
  FooterJs,
  ProjectJs,
  SkillsJs,
  PackagesJson,
  IndexHtml,
} from '../bodyData'

const Body = ({ sidebarState, setSidebarState, setRunApp }) => {
  const [progress, setProgress] = useState(false)
  const renderDom = (param) => {
    switch (param) {
      case sidebarFileState.INDEX:
        return <IndexJs />
      case sidebarFileState.APP:
        return <AppJs />
      case sidebarFileState.CONTACT:
        return <ContactJs />
      case sidebarFileState.HOME:
        return <HomeJs />
      case sidebarFileState.RESUME:
        return <ResumeJS />
      case sidebarFileState.HEADER:
        return <HeaderJs />
      case sidebarFileState.FOOTER:
        return <FooterJs />
      case sidebarFileState.SKILLS:
        return <SkillsJs />
      case sidebarFileState.PROJECT:
        return <ProjectJs />
      case sidebarFileState.PACKAGE:
        return <PackagesJson />
      case sidebarFileState.HTML:
        return <IndexHtml />
      default:
        return <IndexJs />
    }
  }

  const runApp = () => {
    setProgress(true)
    setTimeout(() => {
      setRunApp(true)
      setProgress(false)
    }, 3000)
  }

  return (
    <div className='content-body'>
      <div className='content-body__sidebar'>
        <SideBar setSidebarState={setSidebarState} />
      </div>
      <div className='content-body__wrapper'>{renderDom(sidebarState)}</div>
      <div className='content-body__runapp'>
        {progress ? (
          <progress />
        ) : (
          <button onClick={() => runApp()}>Run App</button>
        )}
      </div>
    </div>
  )
}

export default Body
