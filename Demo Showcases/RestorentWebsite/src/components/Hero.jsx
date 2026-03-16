import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../animations/variants';
import './Style/Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineWords1 = ['A', 'Taste', 'You', 'Will'];
  const headlineWords2 = ['Never', 'Forget'];

  return (
    <section id="home" className="hero-section" ref={ref}>
      <motion.div className="hero-bg" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Fine dining restaurant"
          className="hero-bg-image"
        />
      </motion.div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-content-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-welcome" variants={fadeInUp}>
            <span className="welcome-line"></span>
            <span className="welcome-text">WELCOME TO</span>
            <span className="welcome-line"></span>
          </motion.div>

          <div className="hero-headline">
            <div className="headline-row">
              {headlineWords1.map((word, index) => (
                <motion.span
                  key={index}
                  className="headline-word"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="headline-row">
              {headlineWords2.map((word, index) => (
                <motion.span
                  key={index}
                  className="headline-word headline-accent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          ></motion.div>

          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Experience gourmet cuisine crafted with passion by our world-class chefs
            using the finest ingredients from around the globe.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.a
              href="#menu"
              className="btn-gold"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('menu');
              }}
            >
              Explore Menu
            </motion.a>
            <motion.a
              href="#reservation"
              className="btn-outline-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('reservation');
              }}
            >
              Book a Table
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          onClick={() => handleNavClick('special-dishes')}
        >
          <span className="scroll-text">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaChevronDown className="scroll-icon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;