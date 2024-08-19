import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/CUPA_home_logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-center">
                <img src={logo} alt="Your Logo" className="h-20 mx-auto" />
            </div>
            <ul className="flex justify-center">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/events">Events</Link>
                </li>
                <li>
                <Link to="/resources">Resources</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar