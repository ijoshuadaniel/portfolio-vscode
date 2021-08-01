import React from 'react'
import { appSidebarStateArray } from '@src/utils'
import './index.scss'

const AppSidebar = ({ setAppSidebarState, selected }) => {
  const getClassName = (item) => {
    if (item === selected) {
      return 'app-sidebar__selected'
    }
  }
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar__heading'>
        <p>My Portfolio</p>
      </div>
      <ul className='app-sidebar__menu'>
        {appSidebarStateArray.map((item, index) => {
          return (
            <li
              key={index}
              className={getClassName(item)}
              onClick={() => setAppSidebarState(item)}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AppSidebar
