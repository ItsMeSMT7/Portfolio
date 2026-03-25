import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar, FiAward } from 'react-icons/fi'

const WHATSAPP_NUMBER = '1234567890'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I want to book an appointment at your salon.'
)

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80"
          alt="Luxury Salon Interior"
        />
      </div>
      <div className="hero-overlay" />

      {/* Particles */}
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => (
          <div className="hero-particle" key={i} />
        ))}
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hero-badge"
              >
                <FiStar /> Premium Beauty Studio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hero-title"
              >
                Beauty That
                <span className="title-accent">Defines You</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hero-description"
              >
                Experience luxury beauty care with our expert stylists. Where
                elegance meets perfection in every detail of your
                transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="hero-buttons"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  Book Appointment <FiArrowRight />
                </a>
                <Link to="/services" className="btn-outline-custom">
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="hero-stats"
              >
                <div className="hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Expert Stylists</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-image-side"
            >
              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Professional Stylist"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="hero-floating-card"
              >
                <div className="floating-icon">
                  <FiAward />
                </div>
                <div className="floating-text">
                  <h5>Award Winning</h5>
                  <p>Best Salon 2024</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse" />
        <span>Scroll</span>
      </div>
    </section>
  )
}