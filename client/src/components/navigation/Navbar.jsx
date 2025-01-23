import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">Logo</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/todo" className="hover:text-gray-400">Todo</Link>
          <Link to="/counter" className="hover:text-gray-400">Counter</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </div>
  )
}
