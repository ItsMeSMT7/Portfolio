import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaAward, FaUserMd, FaCapsules, FaTruck } from 'react-icons/fa';
import './Style/About.css';

const features = [
  { icon: <FaUserMd />, text: 'Licensed Pharmacists on Staff' },
  { icon: <FaCapsules />, text: '100% Genuine Certified Medicines' },
  { icon: <FaAward />, text: 'Affordable Competitive Pricing' },
  { icon: <FaTruck />, text: 'Same-Day Express Delivery' },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="about-section section-padding" id="about" ref={ref}>
      <Container>
        <Row className="align-items-center g-5">
          {/* Image Side */}
          <Col lg={6}>
            <motion.div
              className="about-images"
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="about-img-grid">
                <div className="about-img-main">
                  <img
                    src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&h=600&fit=crop"
                    alt="Pharmacy Interior"
                  />
                  <div className="about-img-overlay">
                    <motion.div
                      className="about-play-btn"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlay />
                    </motion.div>
                  </div>
                </div>

                <div className="about-img-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=300&fit=crop"
                    alt="Pharmacist Consulting"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  className="about-experience-badge"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="exp-number">5+</span>
                  <span className="exp-text">Years of<br />Excellence</span>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="about-dots-pattern" />
            </motion.div>
          </Col>

          {/* Content Side */}
          <Col lg={6}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="section-badge">
                <span className="badge-dot" />
                About MedicoCare
              </div>

              <h2 className="section-title">
                Committed to Your <span className="highlight">Health & Wellness</span>
              </h2>

              <p className="about-description">
                MedicoCare Pharmacy has been serving the community with trusted medicines
                and healthcare essentials for over 5 years. Our mission is to provide
                affordable, genuine medicines with professional pharmaceutical guidance
                and fast delivery right to your doorstep.
              </p>

              <p className="about-description">
                With a team of licensed pharmacists and a wide range of certified products,
                we ensure you receive the best healthcare experience every single time.
              </p>

              {/* Features Grid */}
              <div className="about-features">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="about-feature-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="feature-check-icon">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="about-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="btn-primary-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;