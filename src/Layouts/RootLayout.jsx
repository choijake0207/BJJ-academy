import React from 'react'
import {NavLink, Outlet} from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
        <nav className="root-nav">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/account">Account</NavLink>
            <button>Log Out</button>
        </nav>
        <main className="root-main"><Outlet/></main>
       
    </div>
  )
}
