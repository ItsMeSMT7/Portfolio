import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaStar, FaHeart, FaEye } from 'react-icons/fa';
import './Style/Products.css';

const categories = ['All', 'Medicines', 'Devices', 'Wellness', 'First Aid'];

const productsData = [
  {
    name: 'Paracetamol 500mg',
    category: 'Medicines',
    price: 4.99,
    originalPrice: 6.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    badge: 'Best Seller',
    badgeColor: '#0EA5A4',
  },
  {
    name: 'Vitamin C Complex',
    category: 'Wellness',
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    badge: 'Popular',
    badgeColor: '#2563EB',
  },
  {
    name: 'BP Monitor Digital',
    category: 'Devices',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=400&h=400&fit=crop',
    badge: '30% Off',
    badgeColor: '#EF4444',
  },
  {
    name: 'Digital Thermometer',
    category: 'Devices',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=400&fit=crop',
    badge: 'New',
    badgeColor: '#10B981',
  },
  {
    name: 'First Aid Kit Premium',
    category: 'First Aid',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop',
    badge: 'Essential',
    badgeColor: '#F59E0B',
  },
  {
    name: 'Glucose Monitor Kit',
    category: 'Devices',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop',
    badge: 'Top Rated',
    badgeColor: '#8B5CF6',
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section className="products-section section-padding" id="products">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-dot" />
            Our Products
          </div>
          <h2 className="section-title">
            Featured <span className="highlight">Healthcare Products</span>
          </h2>
          <p className="section-subtitle">
            Browse our curated selection of quality medicines, health devices,
            and wellness products at competitive prices.
          </p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="product-categories"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <Row className="g-4">
          <AnimatePresence>
            {filteredProducts.map((product, i) => (
              <Col key={product.name} lg={4} md={6}>
                <motion.div
                  className="product-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div
                      className="product-badge"
                      style={{ background: product.badgeColor }}
                    >
                      {product.badge}
                    </div>

                    <div className="product-actions">
                      <motion.button
                        className="product-action-btn"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaHeart />
                      </motion.button>
                      <motion.button
                        className="product-action-btn"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEye />
                      </motion.button>
                    </div>
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>

                    <div className="product-rating">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, idx) => (
                          <FaStar
                            key={idx}
                            className={idx < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                          />
                        ))}
                      </div>
                      <span className="rating-text">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="product-price-row">
                      <div className="product-price">
                        <span className="price-current">${product.price}</span>
                        <span className="price-original">${product.originalPrice}</span>
                      </div>

                      <motion.button
                        className="add-cart-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaShoppingCart />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {/* View All Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <motion.button
            className="btn-primary-custom"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </div>
      </Container>
    </section>
  );
};

export default Products;