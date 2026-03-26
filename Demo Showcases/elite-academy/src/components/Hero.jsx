import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaStar, FaUsers } from 'react-icons/fa'
import { useCountUp } from 'react-countup'

const Counter = ({ end, suffix, duration }) => {
  const countUpRef = useRef(null)
  useCountUp({
    ref: countUpRef,
    end,
    suffix,
    duration,
    enableScrollSpy: true,
    scrollSpyOnce: true
  })
  return <span ref={countUpRef} />
}

const Hero = () => {
  return (
    <section className="hero-section">
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80"
        alt="Students studying"
        className="hero-bg-image"
      />
      <div className="hero-overlay" />
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                #1 Coaching Institute in the Region
              </div>

              <h1 className="hero-heading">
                Shaping Future
                <span className="highlight">Toppers</span>
              </h1>

              <p className="hero-description">
                Join the most trusted coaching institute for academic excellence
                and competitive success. Unlock your potential with expert
                faculty, proven results, and structured learning.
              </p>

              <div className="hero-buttons">
                <Link to="/courses" className="btn-primary-custom">
                  Explore Courses <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline-custom">
                  Enroll Now
                </Link>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">
                    <Counter end={10000} suffix="+" duration={2.5} />
                  </div>
                  <div className="hero-stat-label">Students Trained</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">
                    <Counter end={500} suffix="+" duration={2.5} />
                  </div>
                  <div className="hero-stat-label">Top Rankers</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">
                    <Counter end={95} suffix="%" duration={2.5} />
                  </div>
                  <div className="hero-stat-label">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="Teacher teaching students"
                />
              </div>

              <motion.div
                className="hero-floating-card card-1"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="floating-icon green">
                  <FaStar />
                </div>
                <div className="floating-text">
                  <h6>Top Rankers</h6>
                  <p>500+ students ranked</p>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-card card-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="floating-icon blue">
                  <FaUsers />
                </div>
                <div className="floating-text">
                  <h6>Expert Faculty</h6>
                  <p>IIT & NIT Alumni</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero