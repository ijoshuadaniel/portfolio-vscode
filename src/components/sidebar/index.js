import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import {
  RiFileAddLine,
  RiFolderAddLine,
  RiBracesFill,
  RiHtml5Line,
} from 'react-icons/ri'
import { AiOutlineMinusSquare } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { ImFilesEmpty } from 'react-icons/im'
import FileListing from '../file-listing'
import FolderListing from '../folder-listing'
import { sidebarFileState } from '../../utils'
import './index.scss'

const SideBar = ({ sidebarState, setSidebarState }) => {
  const [componentClick, setComponentClick] = useState(false)
  const [pageClick, setPageClick] = useState(false)
  const [publicClick, setPublicClick] = useState(false)

  return (
    <div className='sidebar'>
      <div className='sidebar__icons'>
        <div className='sidebar__icons-style'>
          <ImFilesEmpty />
        </div>
      </div>
      <div className='sidebar__files'>
        <div className='sidebar__files-header'>
          <p>EXPLORER</p>
        </div>
        <div className='sidebar__files-headerTab'>
          <div className='sidebar__files-headerTab__heading'>
            <FaAngleDown />
            <span>PORTFOLIO</span>
          </div>
          <div>
            <RiFileAddLine className='sidebar__files-headerTab__icons' />
            <RiFolderAddLine className='sidebar__files-headerTab__icons' />
            <AiOutlineMinusSquare className='sidebar__files-headerTab__icons' />
          </div>
        </div>
        <div className='sidebar__files-listing'>
          <FolderListing
            filename='Components'
            showChlidren={componentClick}
            onClick={() => setComponentClick(!componentClick)}
          >
            <FileListing
              filename='footer.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.FOOTER)}
            />
            <FileListing
              filename='header.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.HEADER)}
            />
            <FileListing
              filename='project.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.PROJECT)}
            />
            <FileListing
              filename='skills.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.SKILLS)}
            />
          </FolderListing>
          <FolderListing
            filename='Pages'
            showChlidren={pageClick}
            onClick={() => setPageClick(!pageClick)}
          >
            <FileListing
              filename='contact.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.CONTACT)}
            />
            <FileListing
              filename='home.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.HOME)}
            />
            <FileListing
              filename='resume.js'
              icon={<SiJavascript />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.RESUME)}
            />
          </FolderListing>
          <FolderListing
            filename='Public'
            showChlidren={publicClick}
            onClick={() => setPublicClick(!publicClick)}
          >
            <FileListing
              filename='index.html'
              icon={<RiHtml5Line />}
              border
              onFileClick={() => setSidebarState(sidebarFileState.HTML)}
            />
          </FolderListing>
          <FileListing
            filename='app.js'
            icon={<SiJavascript />}
            border
            onFileClick={() => setSidebarState(sidebarFileState.APP)}
          />
          <FileListing
            filename='index.js'
            icon={<SiJavascript />}
            border
            onFileClick={() => setSidebarState(sidebarFileState.INDEX)}
          />
          <FileListing
            filename='package.json'
            icon={<RiBracesFill />}
            onFileClick={() => setSidebarState(sidebarFileState.PACKAGE)}
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar
