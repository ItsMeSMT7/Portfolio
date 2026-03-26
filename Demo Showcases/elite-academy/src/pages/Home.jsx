import React from 'react'
import { motion } from 'framer-motion'

import Hero from '../components/Hero'
import Achievements from '../components/Achievements'
import Courses from '../components/Courses'
import Results from '../components/Results'
import Faculty from '../components/Faculty'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import AdmissionForm from '../components/AdmissionForm'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Achievements />
      <Courses />
      <Results />
      <Faculty />
      <About />
      <Testimonials />
      <Gallery />
      <AdmissionForm />
      <Contact />
    </motion.div>
  )
}

export default Home