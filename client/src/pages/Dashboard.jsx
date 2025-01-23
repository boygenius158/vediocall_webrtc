import React, { Fragment } from 'react'
import useAuth from '../hooks/useAuth'
const Dashboard = () => {
  const {token, logout } = useAuth()

  return (
    <Fragment>
      <h1>Welcome, {token}!</h1>
      <button onClick={()=>logout()}>logoust</button>
    </Fragment>
  )
}

export default Dashboard
