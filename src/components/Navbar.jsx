import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout =()=>{
    
    signOut(auth)
    .then(()=>{
      console.log('logout successfully')
     navigate("/auth/login");
    })
    .catch((error)=>{
      console.error(error.message)

    })
  }
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
<div className="flex gap-3 items-center">
  {
    user ? 
    <>
      <img 
        src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} 
        alt="user" 
        className="w-10 h-10 rounded-full"
        title={user.displayName || user.email}
      />
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </>
    :
    <>
      <Link to="/auth/login" className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
        Login
      </Link>
      <Link to="/auth/register" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Register
      </Link>
    </>
  }
</div>
    </nav>
      
    </div>
  )
}

export default Navbar
