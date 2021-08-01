import React, { useState, useEffect } from 'react'
import TopHeader from '@components/topheader'
import Body from '@components/body'
import BottomTab from '@components/bottom'
import { sidebarFileState, appSidebarFileState } from './utils'
import { AiFillCloseCircle } from 'react-icons/ai'
import AppSidebar from './app-components/app-sidebar'
import AppBody from './app-components/app-body'
import { isMobile } from 'react-device-detect'
import { HashLoader } from 'react-spinners'
import './app.scss'

const App = () => {
  const [sidebarState, setSidebarState] = useState(sidebarFileState.INDEX)
  const [loader, setLoader] = useState(true)
  const [runApp, setRunApp] = useState(false)
  const [appSidebarState, setAppSidebarState] = useState(
    appSidebarFileState.ABOUT
  )

  if (isMobile) {
    window.location.href = 'https://mob.joshuadaniel.me'
  }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return loader ? (
    <div className='loader'>
      <HashLoader color='#d1d5da' />
    </div>
  ) : (
    <>
      <TopHeader sidebarState={sidebarState} />
      <Body
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        setRunApp={setRunApp}
      />
      <BottomTab />
      {runApp && (
        <div className='overlay'>
          <div className='app-run'>
            <div
              className='app-run__closeIcon'
              onClick={() => setRunApp(false)}
            >
              <AiFillCloseCircle />
            </div>
            <AppSidebar
              setAppSidebarState={setAppSidebarState}
              selected={appSidebarState}
            />
            <AppBody selected={appSidebarState} />
          </div>
        </div>
      )}
    </>
  )
}

export default App
