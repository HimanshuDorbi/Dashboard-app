import React from 'react';
import { BsGrid1X2Fill, BsPeopleFill, BsClipboardCheck, BsFillBellFill, BsBarChartFill } from 'react-icons/bs';
import smarted from './assets/SMARTED.jpeg';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={smarted} alt="logo" className='logo' />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBarChartFill className='icon' /> Progress
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Students
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsClipboardCheck className='icon' /> Assignments
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillBellFill className='icon' /> Notifications
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBarChartFill className='icon' /> Analytics
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBarChartFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
