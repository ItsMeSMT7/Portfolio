import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaUserMd, FaClock, FaHeart, FaMedkit, FaTruck } from 'react-icons/fa';
import './Style/WhyChoose.css';

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: '100% Authentic',
    desc: 'All medicines are sourced directly from certified manufacturers.',
    number: '01',
  },
  {
    icon: <FaUserMd />,
    title: 'Expert Pharmacists',
    desc: 'Licensed pharmacists available for personalized consultation.',
    number: '02',
  },
  {
    icon: <FaClock />,
    title: 'Quick Service',
    desc: 'Minimal wait time with efficient prescription processing.',
    number: '03',
  },
  {
    icon: <FaHeart />,
    title: 'Patient Care',
    desc: 'Your health comes first — always compassionate care.',
    number: '04',
  },
  {
    icon: <FaMedkit />,
    title: 'Wide Range',
    desc: 'Over 500+ medicines and healthcare products available.',
    number: '05',
  },
  {
    icon: <FaTruck />,
    title: 'Fast Delivery',
    desc: 'Same-day delivery within city limits, express options available.',
    number: '06',
  },
];

const WhyChoose = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="why-section section-padding" ref={ref}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.div
              className="why-content"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <span className="badge-dot" style={{ background: 'white' }} />
                Why Choose Us
              </div>

              <h2 className="section-title" style={{ color: 'white' }}>
                Why <span style={{ color: 'var(--primary-light)' }}>10,000+ Families</span> Trust MedicoCare
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
                We go beyond just selling medicines. Our commitment to quality,
                authenticity, and patient care sets us apart from the rest.
              </p>

              <motion.button
                className="btn-white-custom"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </Col>

          <Col lg={7}>
            <Row className="g-3">
              {reasons.map((reason, i) => (
                <Col key={i} md={6}>
                  <motion.div
                    className="why-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, background: 'rgba(255,255,255,0.12)' }}
                  >
                    <div className="why-card-number">{reason.number}</div>
                    <div className="why-card-icon">{reason.icon}</div>
                    <h4 className="why-card-title">{reason.title}</h4>
                    <p className="why-card-desc">{reason.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Background Elements */}
      <div className="why-bg-glow glow-1" />
      <div className="why-bg-glow glow-2" />
    </section>
  );
};

export default WhyChoose;