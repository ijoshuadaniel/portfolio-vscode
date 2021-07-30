import React from 'react'
import { VscError } from 'react-icons/vsc'
import { BiError } from 'react-icons/bi'

import './index.scss'

const BottomTab = () => {
  return (
    <div className='bottomTab'>
      <VscError />
      <span>0</span>
      <BiError />
      <span>0</span>
    </div>
  )
}

export default BottomTab
