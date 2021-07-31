import React, { useState } from 'react'
import TopHeader from '@components/topheader'
import Body from '@components/body'
import BottomTab from '@components/bottom'
import { sidebarFileState } from './utils'

const App = () => {
  const [sidebarState, setSidebarState] = useState(sidebarFileState.INDEX)
  return (
    <>
      <TopHeader sidebarState={sidebarState} />
      <Body sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <BottomTab />
    </>
  )
}

export default App
