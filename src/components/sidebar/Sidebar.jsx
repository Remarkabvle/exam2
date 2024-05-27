import React, {memo} from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import "./Sidebar.scss"


const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = ()=>{
        localStorage.clear()
        navigate("/")
    }
  return (
    <div className='sidebar'>
        <h2>Dashboard</h2>
        <ul className="sidebar__collection">
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manage"}>Products</NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"create"}>Users</NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"statistic"}>Statistic</NavLink>
          </li>
        </ul>
        <button className='logout' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default memo(Sidebar)