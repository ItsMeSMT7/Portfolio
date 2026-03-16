import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';
import { navLinks } from '../data/data';
import { navSlideDown, fadeInDown } from '../animations/variants';
import './Style/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <motion.nav
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
      variants={navSlideDown}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-brand" onClick={() => handleNavClick('home')}>
            <span className="brand-teal">Savory</span>
            <FaUtensils className="brand-icon" />
            <span className="brand-white">Bite</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                variants={fadeInDown}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.label}
                  <span className="nav-underline"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#reservation"
            className="navbar-cta"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('reservation');
            }}
          >
            Book a Table
          </motion.a>

          <button
            className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`mobile-link ${activeLink === link.id ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                className="mobile-cta btn-gold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('reservation');
                }}
              >
                Book a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;