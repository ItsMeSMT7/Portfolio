import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    text: "Absolutely loved the experience! The team at GlamAura transformed my look completely. The attention to detail is unmatched. I've never felt more beautiful.",
    name: 'Sarah Mitchell',
    role: 'Regular Client',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    text: 'The bridal package was everything I dreamed of and more. My wedding day look was absolutely perfect. Thank you GlamAura for making my dream come true!',
    name: 'Emily Rogers',
    role: 'Bridal Client',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
  },
  {
    text: "Best salon experience I've ever had. The ambiance, the service, the results — everything is world-class. GlamAura is my forever salon.",
    name: 'Jessica Park',
    role: 'VIP Member',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    rating: 5,
  },
  {
    text: "I've been coming here for years. The consistency in quality is what keeps me coming back. Their facial treatments are genuinely transformative.",
    name: 'Amanda Liu',
    role: 'Loyal Client',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
  },
  {
    text: 'From the moment I walked in, I was treated like royalty. The stylists really listen to what you want and deliver beyond expectations.',
    name: 'Rachel Green',
    role: 'New Client',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    text: "The spa treatments here are heavenly. I leave feeling completely rejuvenated every single time. Can't recommend GlamAura enough!",
    name: 'Diana Foster',
    role: 'Spa Enthusiast',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&q=80',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages)
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages)

  useEffect(() => {
    const timer = setInterval(nextPage, 5000)
    return () => clearInterval(timer)
  }, [currentPage])

  return (
    <section className="testimonials-section section-padding section-bg-alt" id="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Testimonials</span>
          <h2>
            What Our Clients <span className="highlight">Say</span>
          </h2>
          <div className="section-divider" />
          <p>
            Real stories from real clients who experienced the GlamAura
            difference.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="row g-4"
          >
            {currentTestimonials.map((t, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <FiStar key={i} fill="#FBBF24" stroke="#FBBF24" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} />
                    <div className="author-info">
                      <h5>{t.name}</h5>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="d-flex justify-content-center gap-3 mt-4" data-aos="fade-up">
          <button
            className="btn-outline-dark"
            onClick={prevPage}
            style={{ padding: '10px 16px', borderRadius: '50%' }}
          >
            <FiChevronLeft />
          </button>
          <button
            className="btn-outline-dark"
            onClick={nextPage}
            style={{ padding: '10px 16px', borderRadius: '50%' }}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}