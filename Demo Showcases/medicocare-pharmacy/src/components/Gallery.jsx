import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExpand } from 'react-icons/fa';
import './Style/Gallery.css';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
    title: 'Pharmacy Interior',
    category: 'Interior',
    span: 'span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=400&fit=crop',
    title: 'Expert Consultation',
    category: 'Service',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
    title: 'Our Pharmacist',
    category: 'Team',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    title: 'Medicine Collection',
    category: 'Products',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
    title: 'Modern Store',
    category: 'Interior',
    span: 'span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
    title: 'Health Products',
    category: 'Products',
    span: '',
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-dot" />
            Our Gallery
          </div>
          <h2 className="section-title">
            Inside <span className="highlight">MedicoCare Pharmacy</span>
          </h2>
          <p className="section-subtitle">
            Take a virtual tour of our modern pharmacy store, our dedicated team,
            and the premium healthcare environment we provide.
          </p>
        </div>

        <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={img.src} alt={img.title} />

              <motion.div
                className="gallery-overlay"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                <div className="gallery-overlay-content">
                  <motion.div
                    className="gallery-zoom-btn"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <FaExpand />
                  </motion.div>
                  <h4>{img.title}</h4>
                  <span>{img.category}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;