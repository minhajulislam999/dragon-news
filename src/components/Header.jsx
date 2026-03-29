import React, { useEffect, useState } from 'react'

const Header = () => {
    const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    setDate(today.toLocaleDateString("en-US", options));
  }, []);
  return (
   
      <header className="bg-white py-4 text-center border-b">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-red-500">🐉 Dragoon News</h1>
      <p className="text-gray-500 text-sm mt-1">Your trusted source for latest news</p>
      <p className="text-gray-400 text-xs mt-1">{date}</p>

      {/* Latest News Marquee */}
      <div className="flex items-center mt-3 bg-gray-100">
        <span className="bg-red-500 text-white px-4 py-2 text-sm font-bold shrink-0">
          LATEST
        </span>
        <marquee className="text-sm text-gray-600 py-2">
          Breaking News: Welcome to Dragoon News! Stay tuned for the latest updates...
        </marquee>
      </div>
    </header>
    
  )
}

export default Header
