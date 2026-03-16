import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { testimonials } from '../data/data';
import { fadeInUp } from '../animations/variants';
import './Style/Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: 'easeIn' },
    }),
  };

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setCurrent(
        (prev) =>
          (prev + newDirection + testimonials.length) % testimonials.length
      );
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-watermark">
        <FaQuoteLeft />
      </div>
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <hr className="section-divider-center" />
        </motion.div>

        <div className="testimonials-carousel">
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel-content">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                className="testimonial-slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <FaQuoteLeft className="testimonial-quote-icon" />
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i + 0.3, duration: 0.3 }}
                    >
                      <FaStar className="star-icon" />
                    </motion.span>
                  ))}
                </div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <span className="testimonial-role">{testimonial.role}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${current === index ? 'carousel-dot-active' : ''}`}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;