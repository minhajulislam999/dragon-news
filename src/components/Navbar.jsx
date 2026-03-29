import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-red-500">
        🐉 Dragoon News
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/category/all" className="hover:text-red-500">Categories</Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Link to="/auth/login" className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
          Login
        </Link>
        <Link to="/auth/register" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Register
        </Link>
      </div>
    </nav>
      
    </div>
  )
}

export default Navbar
