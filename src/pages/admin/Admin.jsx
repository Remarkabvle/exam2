import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Admin.scss"
import { Outlet } from 'react-router-dom'

const Admin = () => {

  return (
    <div className='admin'>
      <div>
        <Sidebar />
      </div>
        <Outlet />
    </div>
  )
}

export default Admin