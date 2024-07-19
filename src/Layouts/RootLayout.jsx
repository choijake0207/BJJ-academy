import React, {useContext} from 'react'
import {NavLink, Outlet} from "react-router-dom"
import { AuthContext } from '../Context/AuthContext'
import Login from '../Pages/Login'
export default function RootLayout() {
  const {authUser} = useContext(AuthContext)
  return (
    <div className="root-layout">
      {authUser ? 
        <>
          <nav className="root-nav">
            <h1>BJJ MGMT</h1>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/account">Account</NavLink>
            <button>Log Out</button>
          </nav>
          <main className="root-main"><Outlet/></main>
        </> : <Login/>}
       
       
    </div>
  )
}
