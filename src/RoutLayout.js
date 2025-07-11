import React from 'react'
import Top from './components/Top'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const RoutLayout = () => {
  return (
    <div>
      <Top/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RoutLayout
