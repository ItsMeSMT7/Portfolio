import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <h3 className="brand-text">
                Glam<span style={{ color: '#EC4899' }}>Aura</span>
              </h3>
              <p>
                Where beauty meets perfection. Experience luxury beauty care with
                our team of world-class stylists and premium treatments.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
                <a href="#" aria-label="YouTube"><FiYoutube /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#">Hair Cut & Styling</a></li>
              <li><a href="#">Hair Coloring</a></li>
              <li><a href="#">Facial Treatments</a></li>
              <li><a href="#">Bridal Packages</a></li>
              <li><a href="#">Spa & Relaxation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5>Contact Info</h5>
            <ul className="footer-contact">
              <li>
                <FiMapPin className="footer-contact-icon" />
                <span>123 Beauty Avenue, New York, NY 10001</span>
              </li>
              <li>
                <FiPhone className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FiMail className="footer-contact-icon" />
                <span>hello@glamaura.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GlamAura Salon. All rights reserved. Crafted with ❤️</p>
        </div>
      </div>
    </footer>
  )
}