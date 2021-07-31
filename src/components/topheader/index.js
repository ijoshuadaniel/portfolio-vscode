import React from 'react'
import './index.scss'

const TopHeader = ({ sidebarState }) => {
  return (
    <div className='top-header'>
      <div className='top-header__buttons'>
        <div className='top-header__buttons_btn top-header__buttons_red ' />
        <div className='top-header__buttons_btn top-header__buttons_yellow ' />
        <div className='top-header__buttons_btn top-header__buttons_green ' />
      </div>
      <span className='top-header__heading'>
        {sidebarState} -- Daniel Paul Joshua S
      </span>
    </div>
  )
}

export default TopHeader
