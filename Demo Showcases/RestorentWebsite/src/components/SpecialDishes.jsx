import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { specialDishes } from '../data/data';
import { fadeInUp, staggerContainer } from '../animations/variants';
import './Style/SpecialDishes.css';

const SpecialDishes = () => {
  return (
    <section id="special-dishes" className="special-section">
      <div className="special-bg-glow"></div>
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">SPECIAL SELECTION</span>
          <h2 className="section-title">Our Special Dishes</h2>
          <hr className="section-divider-center" />
          <p className="special-description">
            Discover our chef's handpicked selection of signature dishes, each crafted
            with exceptional ingredients and artistic presentation.
          </p>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {specialDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="col-lg-4 col-md-6 col-12"
              variants={fadeInUp}
            >
              <motion.div
                className="dish-card"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div className="dish-image-container">
                  <img src={dish.image} alt={dish.name} className="dish-image" />
                  <div className="dish-image-overlay"></div>
                  <span className="dish-category">{dish.category}</span>
                </div>
                <div className="dish-content">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  <div className="dish-footer">
                    <span className="dish-price">{dish.price}</span>
                    <a href="#reservation" className="dish-order">
                      Order Now <FaArrowRight className="dish-order-icon" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialDishes;