import React from 'react'
import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="breadcrumb-custom"
          >
            <span>Home</span>
            <span>/</span>
            <span className="current">Gallery</span>
          </motion.div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
    </main>
  )
}