import { motion } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';
import { galleryImages } from '../data/data';
import { fadeInUp, scaleIn, staggerContainer } from '../animations/variants';
import './Style/Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">GALLERY</span>
          <h2 className="section-title">Our Visual Journey</h2>
          <hr className="section-divider-center" />
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            ...galleryImages,
            {
              id: 'extra-img-1',
              src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
              alt: 'Restaurant interior',
              label: 'Elegant Ambiance',
            },
            {
              id: 'extra-img-2',
              src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80',
              alt: 'Plated dish',
              label: 'Culinary Art',
            },
            {
              id: 'extra-img-new',
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
              alt: 'Gourmet meal',
              label: 'Perfect Plating',
            },
            {
              id: 'extra-img-3',
              src: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=800&q=80',
              alt: 'Chef cooking',
              label: 'Kitchen Action',
            }
          ].map((img, index) => (
            <motion.div
              key={img.id}
              className={`gallery-item 
                ${index === 0 || index === 4 || index === 7 || index === 9 ? 'gallery-item-tall' : ''}
                `}
              variants={scaleIn}
            >
              <div className="gallery-image-wrapper">
                <img src={img.src} alt={img.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <FaSearchPlus className="gallery-icon" />
                  <span className="gallery-label">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;