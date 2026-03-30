import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500">
        🐉 Dragoon News
      </h1>


        <h1 className='text-4xl font-bold text-center mt-20'>404 - Page Not Found</h1>
        <p className='text-center mt-4 text-gray-600'>Sorry, the page you are looking for does not exist.</p>

<Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4">
  Go Back Home
</Link>
      
    </div>

    </div>
  )
}

export default NotFound
