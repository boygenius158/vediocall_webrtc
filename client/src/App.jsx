import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Test from './components/Test'
import Header from './components/ui/Header'
import useAuth from './hooks/useAuth'
import Layout from './components/layout/Layout'
import Counter from './pages/CounterPage'
import TodoPage from './pages/TodoPage'
import CounterPage from './pages/CounterPage'

const App = () => {

  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />
          <Route
            path="/test"
            element={
              <Test />
            }
          />
        </Route>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
