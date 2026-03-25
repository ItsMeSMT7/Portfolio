import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiUsers, FiAward, FiHeart, FiArrowRight } from 'react-icons/fi'

const highlights = [
  {
    icon: <FiUsers />,
    title: 'Professional Stylists',
    text: 'Our team of 50+ certified experts bring artistry and precision.',
  },
  {
    icon: <FiAward />,
    title: 'Premium Products',
    text: 'We exclusively use top-tier, salon-grade beauty products.',
  },
  {
    icon: <FiHeart />,
    title: 'Luxury Experience',
    text: 'Enjoy an immersive atmosphere designed for total relaxation.',
  },
]

export default function About() {
  return (
    <section className="about-section section-padding section-bg" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrapper">
              <div className="about-main-image">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80"
                  alt="Salon Interior"
                />
              </div>
              <motion.div
                className="about-experience-badge"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <span className="exp-number">15+</span>
                <span className="exp-text">Years of Excellence</span>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content">
              <span className="section-badge">About Us</span>
              <h2 className="about-title">
                Where Beauty Meets <span className="highlight">Perfection</span>
              </h2>
              <p className="about-text">
                GlamAura Salon has been redefining luxury beauty since 2009. Our
                passion is creating transformative experiences that leave you
                feeling confident, radiant, and empowered. Every service is
                crafted with precision, artistry, and genuine care.
              </p>

              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div className="about-highlight-item" key={index}>
                    <div className="highlight-icon">{item.icon}</div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary-custom">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}