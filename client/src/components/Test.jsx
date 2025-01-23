import React, { useContext } from 'react'
import useAuth from '../hooks/useAuth'

const Test = () => {
  const { token, isAuthenticated, logout } = useAuth()

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {token}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  )
}

export default Test
