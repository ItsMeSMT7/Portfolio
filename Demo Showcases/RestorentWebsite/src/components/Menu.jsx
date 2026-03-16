import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/data';
import { fadeInUp, staggerContainer } from '../animations/variants';
import './Style/Menu.css';

const categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');

  const currentItems = menuItems[activeCategory] || [];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">OUR MENU</span>
          <h2 className="section-title">Explore Our Menu</h2>
          <hr className="section-divider-center" />
        </motion.div>

        <motion.div
          className="menu-tabs"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`menu-tab ${activeCategory === cat ? 'menu-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="row g-4 mt-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {currentItems.map((item) => (
              <motion.div key={item.id} className="col-md-6" variants={fadeInUp}>
                <div className="menu-item">
                  <div className="menu-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-item-image"
                    />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-desc">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;