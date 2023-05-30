import React from 'react'
import { Outlet } from 'react-router-dom' // used in parent route
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
  )
}

export default Layout