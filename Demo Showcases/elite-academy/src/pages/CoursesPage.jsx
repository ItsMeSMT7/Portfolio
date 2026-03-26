import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Courses from '../components/Courses'
import AdmissionForm from '../components/AdmissionForm'

const CoursesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-banner">
        <div className="container">
          <h1 data-aos="fade-up">Our Courses</h1>
          <div className="breadcrumb-custom" data-aos="fade-up" data-aos-delay="100">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Courses</span>
          </div>
        </div>
      </div>
      <Courses showAll />
      <AdmissionForm />
    </motion.div>
  )
}

export default CoursesPage