import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        {/* Your footer content */}
      </footer>
    </div>
  )
}

export default Layout