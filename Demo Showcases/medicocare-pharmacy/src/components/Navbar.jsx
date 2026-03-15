import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaPhoneAlt, FaBars, FaTimes, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import './Style/Navbar.css';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top Bar */}
      <div className="top-bar">
        <Container>
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FaMapMarkerAlt style={{ color: '#0EA5A4' }} /> 123 Healthcare Avenue, Medical District, NY 10001
              </span>
              <span className="top-bar-divider" style={{ margin: '0 15px', opacity: 0.5 }}>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FaClock style={{ color: '#0EA5A4' }} /> Mon - Sat: 8:00 AM - 10:00 PM
              </span>
            </div>
            <div className="top-bar-right">
              <a href="tel:+1234567890" className="top-bar-phone">
                <FaPhoneAlt /> +1 (234) 567-890
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: scrolled ? 'fixed' : 'relative',
          top: scrolled ? '15px' : '0',
          left: 0,
          right: 0,
          width: '95%',
          maxWidth: '1200px',
          margin: scrolled ? '0 auto' : '15px auto',
          borderRadius: '50px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000
        }}
      >
        <Container>
          <div className="navbar-inner">
            {/* Brand */}
            <a href="#home" className="navbar-brand-custom" onClick={() => handleNavClick('#home')}>
              <motion.div
                className="brand-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaHeartbeat />
              </motion.div>
              <div className="brand-text">
                <span className="brand-name">Medico<span className="brand-accent">Care</span></span>
                <span className="brand-tagline">Pharmacy & Wellness</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="nav-links-desktop">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="nav-link-custom"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  <span className="nav-link-indicator" />
                </motion.a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="nav-actions">
              <motion.button
                className="nav-cart-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiShoppingCart />
              </motion.button>

              <motion.a
                href="tel:+1234567890"
                className="btn-primary-custom nav-cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt /> Call Now
              </motion.a>

              <button
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:+1234567890"
                className="btn-primary-custom mobile-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FaPhoneAlt /> Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarComponent;