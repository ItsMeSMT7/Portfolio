import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaArrowRight, FaCapsules, FaTablets, FaStar, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import './Style/Hero.css';

const Hero = () => {
  const floatingIcons = [
    { icon: <FaCapsules />, top: '15%', left: '5%', delay: 0 },
    { icon: <FaTablets />, top: '25%', right: '8%', delay: 0.5 },
    { icon: <FaShieldAlt />, bottom: '30%', left: '8%', delay: 1 },
    { icon: <FaTruck />, bottom: '20%', right: '5%', delay: 1.5 },
    { icon: <FaHeadset />, top: '60%', left: '3%', delay: 2 },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-gradient-orb orb-3" />
        <div className="hero-grid-pattern" />
      </div>

      {/* Floating Medical Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="hero-floating-icon"
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <Container className="hero-container" style={{ paddingTop: '100px' }}>
        <Row className="align-items-center min-vh-hero">
          <Col lg={6} className="hero-content-col">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <HiSparkles className="hero-badge-icon" />
                <span>Trusted by 10,000+ Families</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Your Trusted
                <br />
                <span className="hero-title-highlight">Neighborhood</span>
                <br />
                <TypeAnimation
                  sequence={[
                    'Pharmacy',
                    3000,
                    'Health Partner',
                    3000,
                    'Wellness Hub',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="hero-typed"
                  repeat={Infinity}
                />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Quality medicines, expert pharmaceutical advice, and lightning-fast
                delivery — all under one roof. Your health is our priority.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="btn-primary-custom hero-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShoppingCart /> Order Medicines
                </motion.button>

                <motion.button
                  className="btn-secondary-custom hero-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Products <FaArrowRight />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="hero-trust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="hero-trust-avatars"  style={{ paddingTop: '-5px' }}>
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="trust-avatar">
                      <img
                        src={`https://i.pravatar.cc/100?img=${num + 10}`}
                        alt={`Customer ${num}`}
                      />
                    </div>
                  ))}
                  <div className="trust-avatar trust-avatar-more">
                    <span>2k+</span>
                  </div>
                </div>
                <div className="hero-trust-info" >
                  <div className="trust-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="trust-text">4.9/5 from 2,000+ reviews</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className="hero-image-col">
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              {/* Main Image */}
              <div className="hero-image-container">
                <div className="hero-image-blob" />
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=700&fit=crop&crop=center"
                  alt="Professional Pharmacist"
                  className="hero-main-image"
                />

                {/* Floating Card 1 */}
                <motion.div
                  className="hero-float-card card-delivery"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="float-card-icon delivery">
                    <FaTruck />
                  </div>
                  <div className="float-card-text">
                    <strong>Free Delivery</strong>
                    <span>Within 30 minutes</span>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  className="hero-float-card card-certified"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="float-card-icon certified">
                    <FaShieldAlt />
                  </div>
                  <div className="float-card-text">
                    <strong>100% Genuine</strong>
                    <span>Certified Medicines</span>
                  </div>
                </motion.div>

                {/* Floating Card 3 */}
                <motion.div
                  className="hero-float-card card-support"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="float-card-icon support">
                    <FaHeadset />
                  </div>
                  <div className="float-card-text">
                    <strong>24/7 Support</strong>
                    <span>Always Available</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
