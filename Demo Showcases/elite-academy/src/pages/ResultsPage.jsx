import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Results from '../components/Results'
import Testimonials from '../components/Testimonials'

const ResultsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-banner">
        <div className="container">
          <h1 data-aos="fade-up">Our Results</h1>
          <div className="breadcrumb-custom" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Results</span>
          </div>
        </div>
      </div>
      <Results showAll />
      <Testimonials />
    </motion.div>
  )
}

export default ResultsPage