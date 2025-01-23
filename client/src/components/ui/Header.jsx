import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <nav className="flex gap-4">
        <Link to="/test" className="text-blue-500 hover:underline">
          Test
        </Link>
        <Link to="/dashboard" className="text-blue-500 hover:underline">
          Dashboard
        </Link>
        
      </nav>
    </header>
  );
}
