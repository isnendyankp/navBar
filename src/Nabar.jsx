import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Nabar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

 const linkStyles = {
   height: showLinks
     ? `${linksRef.current.getBoundingClientRect().height}px`
     : '0px',
 };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className='social-icons'>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              <li key={id}>

              </li>
            })}
        </ul>
      </div>
    </nav>
  );
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
//  s7-244: Add define id,url,text equal to link
//  s7-244: Add return li with key={id}
//  s7-244: create a element with passed url and text
//  s7-244: Add showLinks && to div
//  s7-244: create toggleLinks function
//  s7-244: Add onClick with toggleLinks to button
//  s7-244: Add ternary operator to className of div
//  s7-244: Add ul element with links className
//  s7-247: create linksCponatinerRef with useRef
//  s7-247: create linksRef with useRef
//  s7-247: Add ref={linksContainerRef} to div
//  s7-247: Add ref={linksRef} to ul
//  s7-247: cr8 linkStyles object
//  s7-247: pass in linkStyles to div
//  s7-247: Add height with getBoundingClientRect().height to linkStyles object
//  s7-249: Add social-icons ul
//  s7-249: Add social.map() to ul
//  s7-249: pass in socialIcon to map
//  s7-249: destructure id, url, icon from socialIcon
//  s7-249: Add li with key id