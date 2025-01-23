import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Navbar from '../navigation/Navbar'

export default function Layout() {
  const { logout } = useAuth()
  return (
    <React.Fragment>
      <Navbar />
      <button onClick={logout}>logoutds</button>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}
