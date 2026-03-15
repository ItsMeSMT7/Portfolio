import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaDirections, FaPaperPlane
} from 'react-icons/fa';
import './Style/Contact.css';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Our Location',
    line1: '123 Healthcare Avenue',
    line2: 'Medical District, NY 10001',
    color: '#0EA5A4',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone Number',
    line1: '+1 (234) 567-890',
    line2: '+1 (234) 567-891',
    color: '#2563EB',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    line1: 'info@medicocare.com',
    line2: 'support@medicocare.com',
    color: '#10B981',
  },
  {
    icon: <FaClock />,
    title: 'Working Hours',
    line1: 'Mon - Sat: 8:00 AM - 10:00 PM',
    line2: 'Sunday: 9:00 AM - 6:00 PM',
    color: '#F59E0B',
  },
];

const Contact = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-dot" />
            Get In Touch
          </div>
          <h2 className="section-title">
            Contact <span className="highlight">MedicoCare</span>
          </h2>
          <p className="section-subtitle">
            Have a question or need assistance? We're here to help!
            Reach out to us anytime.
          </p>
        </div>

        {/* Contact Info Cards */}
        <Row className="g-4 mb-5">
          {contactInfo.map((info, i) => (
            <Col key={i} lg={3} sm={6}>
              <motion.div
                className="contact-info-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -8 }}
              >
                <div
                  className="contact-info-icon"
                  style={{ background: `${info.color}15`, color: info.color }}
                >
                  {info.icon}
                </div>
                <h4 className="contact-info-title">{info.title}</h4>
                <p className="contact-info-line">{info.line1}</p>
                <p className="contact-info-line">{info.line2}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={6}>
            <motion.div
              className="contact-form-card"
              data-aos="fade-right"
            >
              <h3 className="contact-form-title">Send Us a Message</h3>
              <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <div className="form-group-custom">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-input-custom"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group-custom">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-input-custom"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group-custom">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="form-input-custom"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group-custom">
                      <select className="form-input-custom">
                        <option value="">Select Subject</option>
                        <option>Medicine Inquiry</option>
                        <option>Delivery Issue</option>
                        <option>Consultation</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group-custom">
                      <textarea
                        rows="4"
                        placeholder="Your Message..."
                        className="form-input-custom"
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <motion.button
                      type="button"
                      className="btn-primary-custom contact-submit-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaPaperPlane /> Send Message
                    </motion.button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>

          {/* Map */}
          <Col lg={6}>
            <motion.div
              className="contact-map-card"
              data-aos="fade-left"
            >
              <div className="map-wrapper">
                <iframe
                  title="MedicoCare Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182028937828!2d-73.98784868459376!3d40.74844047932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              <div className="map-action-buttons">
                <motion.a
                  href="tel:+1234567890"
                  className="btn-primary-custom"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPhoneAlt /> Call Now
                </motion.a>
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-custom"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaDirections /> Get Directions
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;