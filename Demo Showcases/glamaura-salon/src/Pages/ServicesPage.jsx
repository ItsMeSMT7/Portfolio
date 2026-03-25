import React from 'react'
import { motion } from 'framer-motion'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Booking from '../components/Booking'

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="breadcrumb-custom"
          >
            <span>Home</span>
            <span>/</span>
            <span className="current">Services</span>
          </motion.div>
        </div>
      </section>

      <Services showFilter={true} />
      <Pricing />
      <Booking />
    </main>
  )
}