import * as React from 'react'
import Navbar from './navbar'
import favicon from '../images/favicon.svg'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="layout-container mx-auto font-serif">
      <Navbar />
      <main>{children}</main>
      <footer className="">
        {/* Your footer content */}
      </footer>
    </div>
  )
}

// export const Head = () => <Link
export default Layout