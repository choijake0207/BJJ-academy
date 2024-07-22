import React, {useContext} from 'react'
import {NavLink, Outlet} from "react-router-dom"
import { AuthContext } from '../Context/AuthContext'
import Login from '../Pages/Login'
import "../Styles/Login.css"
export default function RootLayout() {
  const {authUser, logout} = useContext(AuthContext)
  return (
    <>
      {authUser ? 
        <div className="root-layout">
          <header className="header">
            <img src="src/Assets/bjj_belts_logo_icon (1).svg"/>
            <h1>BJJ MGMT</h1>
          </header>
          <div className="content-columns">
            <nav className="side-nav-bar">
              
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/classes">Classes</NavLink>
              {authUser.role === "admin" && 
                <>
                  <NavLink to="/analytics">Analytics</NavLink>
                  <NavLink to="/members">Members</NavLink>
                  <NavLink to="/employees">Employees</NavLink>
                </>
              }
              <NavLink to="/account">Account</NavLink>
              <button onClick={logout}>Log Out</button>
            </nav>
            <main className="root-main"><Outlet/></main>
          </div>
        </div> : 
        <Login/>
      } 
    </>
  )
}
