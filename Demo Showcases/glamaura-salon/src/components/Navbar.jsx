import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiScissors } from 'react-icons/fi'

const WHATSAPP_NUMBER = '1234567890'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I want to book an appointment at your salon.'
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCollapsed(true)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar navbar-expand-lg glamaura-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand navbar-brand-custom">
          <div className="brand-icon">
            <FiScissors />
          </div>
          <div className="brand-text">
            Glam<span className="brand-highlight">Aura</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
          <ul className="navbar-nav mx-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}