import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import './Style/CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <Container>
        <motion.div
          className="cta-card"
          data-aos="zoom-in"
          whileHover={{ scale: 1.01 }}
        >
          <div className="cta-bg-pattern" />
          <div className="cta-bg-glow" />

          <Row className="align-items-center">
            <Col lg={7}>
              <div className="cta-content">
                <h2 className="cta-title">
                  Need Medicines Urgently?
                  <br />
                  <span>We Deliver in 30 Minutes!</span>
                </h2>
                <p className="cta-desc">
                  Call us now or order online. Our express delivery team ensures your
                  medicines reach you within 30 minutes across the city.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="cta-actions">
                <motion.a
                  href="tel:+1234567890"
                  className="btn-white-custom cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhoneAlt /> Call Now
                </motion.a>
                <motion.button
                  className="btn-cta-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Online <FaArrowRight />
                </motion.button>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;