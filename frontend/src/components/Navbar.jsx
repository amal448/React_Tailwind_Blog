import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaDribbble, FaFacebook, FaTwitter, FaBars, FaXmark } from 'react-icons/fa6'
import Model from './Model'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModelOpen,SetisModelOpen]=useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const openModal=()=>{
    SetisModelOpen(true)
  }
  const closeModal=()=>{
    SetisModelOpen(false)
  }
  const navItems = [
    { path: '/', link: "Home" },
    { path: '/about', link: "About" },
    { path: '/contact', link: "Contact" },
    { path: '/service', link: "Services" },
    { path: '/blogs', link: "Blogs" },
  ]

  return (
    <div>
      <header className='bg-black fixed top-0 left-0 right-0 z-50'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
          <a href="/" className='text-xl font-bold text-white'>
            Design
            <span className='text-orange-500'>DK</span>
          </a>

          {/* Desktop Menu */}
          <ul className='md:flex gap-12 text-lg hidden'>
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-white hover:text-orange-500 transition"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
            <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
            <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
            <button onClick={openModal}
              className='bg-orange-500 px-6 py-2 font-medium
             hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'
            >
              LogIn
            </button>
          </div>

      
          {/* Mobile Toggle */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
              {isMenuOpen ? (
                <FaXmark className='w-5 h-5 text-white' />
              ) : (
                <FaBars className='w-5 h-5 text-white' />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-black text-lg space-y-4 px-4 py-6">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-orange-500 font-semibold"
                      : "block text-white hover:text-orange-500 transition"
                  }
                  onClick={() => setIsMenuOpen(false)} // close menu on click
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </header>
      <Model  isModelOpen={isModelOpen} closeModal={closeModal} />

    </div>
  )
}

export default Navbar
