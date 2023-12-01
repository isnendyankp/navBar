import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Nabar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='logo' alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          {links.map((link) => {

            } 
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nabar

// Progress:
//  s7-244: create base Nabar component
//  s7-244: import useState
//  s7-244: import FaBars
//  s7-244: import links, social
//  s7-244: import logo.svg
//  s7-244: Add showLinks state with default value of false
//  s7-244: Add nav element with nav-center div
//  s7-244: Add nav-header div
//  s7-244: Add img element with logo
//  s7-244: Add className='logo' to img element
//  s7-244: Add button element with nav-toggle className
//  s7-244: Add div with links-container className
//  s7-244: Add links.map() to div