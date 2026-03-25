import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import Booking from '../components/Booking'

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="breadcrumb-custom"
          >
            <span>Home</span>
            <span>/</span>
            <span className="current">Contact</span>
          </motion.div>
        </div>
      </section>

      <Booking />
      <Contact />
    </main>
  )
}