import React, { useContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider,Outlet } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Dashboard from './Pages/Dashboard'
import Classes from './Pages/Classes'
import Account from './Pages/Account'
import { AuthContext, AuthContextProvider } from './Context/AuthContext'
import Login from './Pages/Login'
import "./App.css"

const ProtectedRoute = () => {
  const {authUser} = useContext(AuthContext)
  return authUser ? <Outlet/> : <Navigate to="/login"/>
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/login" element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/account" element={<Account/>}/>
      </Route>
    </Route>
  )
)

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
    
  )
}
