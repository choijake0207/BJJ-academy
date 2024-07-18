import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Dashboard from './Pages/Dashboard'
import Classes from './Pages/Classes'
import Account from './Pages/Account'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/account" element={<Account/>}/>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
