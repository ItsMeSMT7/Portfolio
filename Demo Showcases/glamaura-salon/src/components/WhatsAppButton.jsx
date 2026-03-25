import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '1234567890'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I want to book an appointment at your salon.'
)

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-float">
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="whatsapp-pulse" />
        <FaWhatsapp />
      </motion.a>
    </div>
  )
}