import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiScissors,
  FiDroplet,
  FiSun,
  FiHeart,
  FiStar,
  FiFeather,
} from 'react-icons/fi'

const allServices = [
  {
    id: 1,
    category: 'Hair',
    title: 'Hair Cut & Styling',
    description:
      'Precision cuts and creative styling tailored to your unique look and personality.',
    price: '49',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    icon: <FiScissors />,
  },
  {
    id: 2,
    category: 'Hair',
    title: 'Hair Coloring',
    description:
      'From subtle highlights to bold transformations using premium color products.',
    price: '89',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80',
    icon: <FiDroplet />,
  },
  {
    id: 3,
    category: 'Skin',
    title: 'Facial Treatments',
    description:
      'Revitalize your skin with our luxurious facial treatments and advanced skincare.',
    price: '69',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    icon: <FiSun />,
  },
  {
    id: 4,
    category: 'Makeup',
    title: 'Makeup Services',
    description:
      'Professional makeup artistry for every occasion, from subtle to glamorous.',
    price: '79',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    icon: <FiHeart />,
  },
  {
    id: 5,
    category: 'Bridal',
    title: 'Bridal Packages',
    description:
      'Complete bridal beauty packages to make your special day truly unforgettable.',
    price: '299',
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    icon: <FiStar />,
  },
  {
    id: 6,
    category: 'Spa',
    title: 'Spa & Relaxation',
    description:
      'Unwind with our rejuvenating spa treatments designed to restore balance.',
    price: '99',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    icon: <FiFeather />,
  },
]

const categories = ['All', 'Hair', 'Skin', 'Makeup', 'Bridal', 'Spa']

export default function Services({ showFilter = true, limit }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices =
    activeCategory === 'All'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory)

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices

  return (
    <section className="services-section section-padding section-bg-alt" id="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Our Services</span>
          <h2>
            What We <span className="highlight">Offer</span>
          </h2>
          <div className="section-divider" />
          <p>
            Discover our range of premium beauty services designed to bring out
            the best version of you.
          </p>
        </div>

        {showFilter && (
          <div className="service-filter-buttons" data-aos="fade-up" data-aos-delay="100">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="row g-4">
          <AnimatePresence mode="wait">
            {displayServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                layout
              >
                <div className="service-card h-100 d-flex flex-column" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="service-card-image" style={{ position: 'relative' }}>
                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <div 
                      className="service-icon-badge" 
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        width: '55px',
                        height: '55px',
                        backgroundColor: '#D4AF37',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        zIndex: 2
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <div className="service-card-body flex-grow-1 d-flex flex-column" style={{ padding: '25px' }}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <div className="service-price mt-auto">
                      ${service.price} <span>/ session</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}