import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'

const AboutPage = () => {
  const values = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      text: 'To democratize quality education and empower every student with the knowledge, skills, and confidence to excel in competitive examinations.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      text: 'To be recognized as the most trusted and result-oriented coaching institute, producing future leaders for the nation.'
    },
    {
      icon: <FaHandshake />,
      title: 'Our Values',
      text: 'Integrity, excellence, discipline, and student-first approach. Every student has the potential to be a topper.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-banner">
        <div className="container">
          <h1 data-aos="fade-up">About Us</h1>
          <div className="breadcrumb-custom" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      <About />

      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="text-center section-header" data-aos="fade-up">
            <h2 className="section-title">Our <span>Core Values</span></h2>
            <div className="section-line" />
          </div>

          <div className="row g-4">
            {values.map((val, i) => (
              <div className="col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="achievement-card" style={{ textAlign: 'left', padding: '36px' }}>
                  <div className="achievement-icon" style={{ margin: '0 0 20px', borderRadius: '14px' }}>
                    {val.icon}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '12px' }}>
                    {val.title}
                  </h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.8, margin: 0 }}>
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Achievements />
      <Gallery />
      <Testimonials />
    </motion.div>
  )
}

export default AboutPage