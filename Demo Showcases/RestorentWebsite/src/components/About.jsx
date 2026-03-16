import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaLeaf, FaTrophy, FaUtensils, FaArrowRight } from 'react-icons/fa';
import { fadeInLeft, fadeInRight, fadeInUp } from '../animations/variants';
import './Style/About.css';

const Counter = ({ end, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const highlights = [
    {
      icon: <FaLeaf />,
      title: 'Farm Fresh',
      description: 'Locally sourced organic ingredients',
    },
    {
      icon: <FaTrophy />,
      title: 'Award Winning',
      description: 'Michelin-starred culinary team',
    },
    {
      icon: <FaUtensils />,
      title: 'Fine Dining',
      description: 'Unforgettable luxury experience',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-frame"></div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="SavoryBite restaurant interior"
                className="about-image"
              />
              <motion.div
                className="about-floating-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="floating-number">
                  <Counter end={25} suffix="+" />
                </span>
                <span className="floating-text">Years of Excellence</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-content">
              <span className="section-subtitle">ABOUT US</span>
              <h2 className="section-title about-title">
                Where Every Flavor Tells a Story
              </h2>
              <hr className="section-divider" />
              <p className="about-text">
                Founded in 1998, SavoryBite has been a cornerstone of culinary
                excellence in Manhattan. Our founder, Chef Marco Bellini, envisioned a
                dining experience that transcends the ordinary — where every dish is a
                masterpiece and every guest is family.
              </p>
              <p className="about-text">
                We source the finest ingredients from local farms and international
                purveyors, ensuring that each plate reflects our commitment to quality,
                sustainability, and innovation.
              </p>

              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  >
                    <div className="highlight-icon">{item.icon}</div>
                    <div className="highlight-text">
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#about"
                className="about-cta"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Read Our Story <FaArrowRight className="about-cta-icon" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;