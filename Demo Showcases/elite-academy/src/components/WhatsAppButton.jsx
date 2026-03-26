import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    'Hello, I want to know more about your coaching institute courses.'
  )
  const phoneNumber = '919999999999'
  const url = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.div
      className="whatsapp-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    >
      <div className="whatsapp-tooltip">Chat with us on WhatsApp!</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </motion.div>
  )
}

export default WhatsAppButton