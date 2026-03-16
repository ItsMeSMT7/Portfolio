import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaUtensils,
  FaHeart,
} from 'react-icons/fa';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../animations/variants";
import './Style/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reservations', id: 'reservation' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
    { icon: <FaYoutube />, label: 'YouTube', href: '#' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-top-border">
        <div className="footer-border-glow"></div>
      </div>
      <div className="container">
        <motion.div
          className="row g-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="col-lg-3 col-md-6" variants={fadeInUp}>
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={() => handleNavClick('home')}>
                <span className="brand-gold">Savory</span>
                <FaUtensils className="brand-icon" />
                <span className="brand-white">Bite</span>
              </a>
              <p className="footer-brand-desc">
                Experience the art of fine dining at Manhattan's most celebrated
                restaurant. Where passion meets perfection on every plate.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, backgroundColor: '#F59E0B', color: '#020617' }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={fadeInUp}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={fadeInUp}>
            <h4 className="footer-title">Opening Hours</h4>
            <ul className="footer-hours">
              <li className="hours-item">
                <span className="hours-day">Monday – Friday</span>
                <span className="hours-time">11:00 AM – 11:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">10:00 AM – 12:00 AM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">10:00 AM – 12:00 AM</span>
              </li>
              <li className="hours-item hours-special">
                <span className="hours-day">Happy Hour</span>
                <span className="hours-time">4:00 PM – 6:00 PM (Daily)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={fadeInUp}>
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Subscribe to receive updates on special menus, events, and exclusive
              offers.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} SavoryBite. All rights reserved.
            </p>
            <div className="footer-credit">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;