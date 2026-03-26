import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Faculty', path: '/faculty' },
    { label: 'Results', path: '/results' },
    { label: 'Contact', path: '/contact' }
  ]

  const courseLinks = [
    { label: 'JEE Main & Advanced', path: '/courses' },
    { label: 'NEET UG Preparation', path: '/courses' },
    { label: 'Foundation Courses', path: '/courses' },
    { label: 'SSC Board', path: '/courses' },
    { label: 'Crash Courses', path: '/courses' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <div className="brand-icon"><FaGraduationCap /></div>
              Elite Academy
            </div>
            <p className="footer-desc">
              Shaping future toppers since 2014. Your trusted partner for academic excellence.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}><FaChevronRight size={10} /> {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Our Courses</h5>
            <ul className="footer-links">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}><FaChevronRight size={10} /> {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contact Info</h5>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-contact-icon" />
              <span>123, Academic Road, Education City, Maharashtra — 400001</span>
            </div>
            <div className="footer-contact-item">
              <FaPhoneAlt className="footer-contact-icon" />
              <span>+91 99999 99999</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-contact-icon" />
              <span>info@eliteacademy.edu</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elite Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer