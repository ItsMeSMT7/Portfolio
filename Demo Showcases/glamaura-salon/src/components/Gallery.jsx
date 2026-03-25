import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80',
    title: 'Salon Interior',
    category: 'Interior',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    title: 'Hair Styling',
    category: 'Hair',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    title: 'Professional Makeup',
    category: 'Makeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    title: 'Facial Treatment',
    category: 'Skin Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    title: 'Spa Relaxation',
    category: 'Spa',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    title: 'Bridal Beauty',
    category: 'Bridal',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    title: 'Precision Cut',
    category: 'Hair',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080661-46bbfcb3a0f7?w=600&q=80',
    title: 'Modern Studio',
    category: 'Interior',
  },
]

export default function Gallery({ limit }) {
  const items = limit ? galleryImages.slice(0, limit) : galleryImages

  return (
    <section className="gallery-section section-padding section-bg-alt" id="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Our Gallery</span>
          <h2>
            Beauty in <span className="highlight">Every Frame</span>
          </h2>
          <div className="section-divider" />
          <p>
            Explore our collection of stunning transformations and beautiful
            salon moments.
          </p>
        </div>

        <div className="row g-4">
          {items.map((item, index) => (
            <div
              className={`col-lg-${item.tall ? '4' : '4'} col-md-6`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <motion.div
                className={`gallery-item ${item.tall ? 'tall' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h5>{item.title}</h5>
                    <p>{item.category}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}