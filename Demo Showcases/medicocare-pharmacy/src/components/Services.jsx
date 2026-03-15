import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaPrescriptionBottleAlt, FaCapsules, FaTruck, FaStethoscope,
  FaWheelchair, FaLaptopMedical, FaArrowRight
} from 'react-icons/fa';
import './Style/Services.css';

const servicesData = [
  {
    icon: <FaPrescriptionBottleAlt />,
    title: 'Prescription Medicines',
    desc: 'Get your prescribed medicines with expert pharmacist consultation and verification.',
    color: '#0EA5A4',
  },
  {
    icon: <FaCapsules />,
    title: 'OTC Products',
    desc: 'Wide range of over-the-counter medicines, vitamins, and health supplements.',
    color: '#2563EB',
  },
  {
    icon: <FaTruck />,
    title: 'Home Delivery',
    desc: 'Fast and reliable medicine delivery to your doorstep within 30 minutes.',
    color: '#10B981',
  },
  {
    icon: <FaStethoscope />,
    title: 'Health Checkups',
    desc: 'Regular health screening services including BP, sugar, and cholesterol tests.',
    color: '#F59E0B',
  },
  {
    icon: <FaWheelchair />,
    title: 'Medical Equipment',
    desc: 'Quality medical devices and equipment for home healthcare needs.',
    color: '#EF4444',
  },
  {
    icon: <FaLaptopMedical />,
    title: 'Online Consultation',
    desc: 'Connect with certified pharmacists and doctors for online health guidance.',
    color: '#8B5CF6',
  },
];

const Services = () => {
  return (
    <section className="services-section section-padding" id="services">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-dot" />
            What We Offer
          </div>
          <h2 className="section-title">
            Our Premium <span className="highlight">Healthcare Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive pharmacy and healthcare services designed to keep you
            and your family healthy, happy, and well-cared for.
          </p>
        </div>

        <Row className="g-4">
          {servicesData.map((service, i) => (
            <Col key={i} lg={4} md={6}>
              <motion.div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card-inner">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      background: `${service.color}12`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                    <div
                      className="service-icon-glow"
                      style={{ background: service.color }}
                    />
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>

                  <motion.a
                    href="#"
                    className="service-link"
                    style={{ color: service.color }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FaArrowRight />
                  </motion.a>

                  <div
                    className="service-card-border"
                    style={{ background: service.color }}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Background decoration */}
      <div className="services-bg-decoration">
        <div className="services-shape shape-1" />
        <div className="services-shape shape-2" />
      </div>
    </section>
  );
};

export default Services;