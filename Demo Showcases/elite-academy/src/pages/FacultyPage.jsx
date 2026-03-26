import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Faculty from '../components/Faculty'

const FacultyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-banner">
        <div className="container">
          <h1 data-aos="fade-up">Our Faculty</h1>
          <div className="breadcrumb-custom" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Faculty</span>
          </div>
        </div>
      </div>
      <Faculty showAll />
    </motion.div>
  )
}

export default FacultyPage