// Header component - Navigation bar for the portfolio
// Learning: useEffect hook for side effects (like event listeners)
// Learning: useState for managing mobile menu state

import { useState, useEffect } from 'react'

function Header() {
  // useState to track if mobile menu is open or closed
  // isMenuOpen = current state value
  // setIsMenuOpen = function to update the state
  // false = initial value (menu starts closed)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle the menu (open/close)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // Toggle between true and false
  }

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // useEffect for smooth scrolling
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add event listener to all anchor tags
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleClick)
    })

    // Cleanup function - runs when component unmounts
    // This prevents memory leaks by removing event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, []) // Empty array means this runs only once when component mounts

  // useEffect to close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // If menu is open and click is outside the nav element, close menu
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen]) // Runs whenever isMenuOpen changes

  return (
    <header>
      {/* This is JSX - HTML-like syntax in JavaScript */}
      <nav>
        <div className="logo">
          <h2>Raphael Ziade</h2>
        </div>
        
        {/* Hamburger button - only visible on mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile menu - only visible when isMenuOpen is true */}
        <ul className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
