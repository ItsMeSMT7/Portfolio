import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaClock, FaCapsules, FaHeadset } from 'react-icons/fa';
import './Style/Stats.css';

const statsData = [
  { icon: <FaUsers />, number: 10000, suffix: '+', label: 'Happy Customers', color: '#0EA5A4' },
  { icon: <FaClock />, number: 5, suffix: '+', label: 'Years of Service', color: '#2563EB' },
  { icon: <FaCapsules />, number: 500, suffix: '+', label: 'Medicines Available', color: '#10B981' },
  { icon: <FaHeadset />, number: 24, suffix: '/7', label: 'Customer Support', color: '#F59E0B' },
];

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="stats-section" ref={ref}>
      <Container  style={{ paddingTop: '100px' }}>
        <Row className="g-4">
          {statsData.map((stat, i) => (
            <Col key={i} lg={3} sm={6}>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              >
                <div
                  className="stat-icon-wrapper"
                  style={{
                    background: `${stat.color}15`,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                  <div
                    className="stat-icon-ring"
                    style={{ borderColor: `${stat.color}30` }}
                  />
                </div>

                <div className="stat-number">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      className="counter"
                    />
                  )}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>

                <p className="stat-label">{stat.label}</p>

                <div
                  className="stat-bar"
                  style={{ background: `${stat.color}20` }}
                >
                  <motion.div
                    className="stat-bar-fill"
                    style={{ background: stat.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ delay: i * 0.15 + 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;