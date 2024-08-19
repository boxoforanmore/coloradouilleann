import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/CUPA_home_logo.png'
import navbackground from '../images/navbar-background.jpg'
import puck from '../images/puck-favicon.png'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
  

    return (
        <nav className="text-black">
            <div className="hidden header-container md:block mx-auto" style={{ backgroundImage: `url(${navbackground})`, backgroundSize: 'cover' }}>
                <img src={logo} alt="Colorado Uilleann Piper Association Logo of moutains behind a bass regulator puck" className="max-h-56 min-w-20 mx-auto" />
                <div>
                    <ul className="hidden md:flex justify-center mt-4 mb-4 navbar-large text-xl">
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li>
                            <Link to="/events" className="nav-link">Events</Link>
                        </li>
                        <li>
                            <Link to="/resources" className="nav-link">Resources</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* This is the mobile navbar but it isn't working quite yet.  It needs to be fixed */}
            <div className="md:hidden mx-auto flex flex-wrap table-header-container pt-1 pl-1 pb-1 bg-black" style={{ backgroundImage: `url(${navbackground})`, backgroundSize: 'cover' }}>
                <button onClick={toggleMenu} className="focus:outline-none text-left">
                    <img src={puck} alt="Icon of a bass regulator puck" className="max-h-12 min-w-4 mx-auto" />
                </button>
                <h1 className="text-center flex-1 text-3xl pt-1 font-bold">CUPA</h1>
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-800">
                        <ul className="flex justify-center mt-4 mb-4 navbar-large text-xl">
                            <li>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li>
                                <Link to="/events" className="nav-link">Events</Link>
                            </li>
                            <li>
                                <Link to="/resources" className="nav-link">Resources</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
  )
}

export default Navbar