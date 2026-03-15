import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaHeartbeat, FaFacebookF, FaTwitter, FaInstagram,
  FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaArrowRight, FaHeart
} from 'react-icons/fa';
import './Style/Footer.css';

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Services', 'Products',
    'Gallery', 'Contact'
  ];

  const services = [
    'Prescription Medicines', 'OTC Products', 'Home Delivery',
    'Health Checkups', 'Medical Equipment', 'Online Consultation'
  ];

  return (
    <footer className="footer-section">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="newsletter-title">
                Subscribe to Health Tips & Offers
              </h3>
              <p className="newsletter-desc">
                Get weekly health tips, medicine discounts, and exclusive offers directly to your inbox.
              </p>
            </Col>
            <Col lg={6}>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <motion.button
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe <FaArrowRight />
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <Container>
          <Row className="g-4">
            {/* Brand */}
            <Col lg={4} md={6}>
              <div className="footer-brand">
                <a href="#home" className="footer-logo">
                  <div className="footer-logo-icon">
                    <FaHeartbeat />
                  </div>
                  <div>
                    <span className="footer-logo-text">Medico<span>Care</span></span>
                    <span className="footer-logo-tagline">Pharmacy & Wellness</span>
                  </div>
                </a>

                <p className="footer-brand-desc">
                  Your trusted neighborhood pharmacy providing quality medicines,
                  expert advice, and fast delivery for over 5 years. Your health
                  is our priority.
                </p>

                <div className="footer-social">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="social-icon"
                      whileHover={{ y: -4, background: 'var(--primary)', color: 'white' }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`}>
                      <FaArrowRight className="footer-link-arrow" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Services */}
            <Col lg={3} md={6}>
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-links">
                {services.map((service, i) => (
                  <li key={i}>
                    <a href="#services">
                      <FaArrowRight className="footer-link-arrow" /> {service}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={3} md={6}>
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>123 Healthcare Avenue, Medical District, NY 10001</span>
                </div>
                <div className="footer-contact-item">
                  <FaPhoneAlt className="footer-contact-icon" />
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <span>info@medicocare.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content" style={{ position: "relative" }}>
            
            <p>
              © {new Date().getFullYear()} MedicoCare Pharmacy. All rights reserved.
            </p>

            <div className="footer-center-text">
                Made with <FaHeart className="heart-icon" /> by{' '}
                <a 
                  href="https://sumitasalkar.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="asalkar-link"
                >
                  Asalkar Digital
                </a>
              </div>

            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Disclaimer</a>
            </div>

          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;