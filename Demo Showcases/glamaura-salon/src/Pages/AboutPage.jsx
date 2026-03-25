import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="breadcrumb-custom"
          >
            <span>Home</span>
            <span>/</span>
            <span className="current">About</span>
          </motion.div>
        </div>
      </section>

      <About />
      <Team />
      <Testimonials />
    </main>
  )
}