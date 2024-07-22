import React, {useContext} from 'react'
import {NavLink, Outlet} from "react-router-dom"
import { AuthContext } from '../Context/AuthContext'
import Login from '../Pages/Login'
import { Gauge, ChartBar, User, UserList, CalendarBlank, SignOut } from 'phosphor-react'
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
              
              <NavLink to="/"><Gauge/>Dashboard</NavLink>
              <NavLink to="/classes"><CalendarBlank/>Classes</NavLink>
              {authUser.role === "admin" && 
                <>
                  <NavLink to="/analytics"><ChartBar/>Analytics</NavLink>
                  <NavLink to="/members"><UserList/>Members</NavLink>
                </>
              }
              <NavLink to="/account"><User/>Account</NavLink>
              <button onClick={logout}><SignOut/>Log Out</button>
            </nav>
            <main className="root-main"><Outlet/></main>
          </div>
        </div> : 
        <Login/>
      } 
    </>
  )
}
