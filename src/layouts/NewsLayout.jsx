import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const NewsLayout = () => {
  return (
    <div>
        <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default NewsLayout
