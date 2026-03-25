import React from 'react'
import { motion } from 'framer-motion'
import { FiScissors, FiSun, FiHeart, FiCheck } from 'react-icons/fi'

const WHATSAPP_NUMBER = '1234567890'

const pricingPlans = [
  {
    title: 'Haircut Package',
    icon: <FiScissors />,
    price: '79',
    popular: false,
    features: [
      'Precision Hair Cut',
      'Hair Wash & Conditioning',
      'Blow Dry & Styling',
      'Scalp Treatment',
      'Complimentary Beverage',
    ],
  },
  {
    title: 'Facial Package',
    icon: <FiSun />,
    price: '149',
    popular: true,
    features: [
      'Deep Cleansing Facial',
      'Exfoliation & Mask',
      'Anti-Aging Treatment',
      'LED Light Therapy',
      'Premium Serum Application',
      'Complimentary Spa Access',
    ],
  },
  {
    title: 'Bridal Package',
    icon: <FiHeart />,
    price: '499',
    popular: false,
    features: [
      'Bridal Makeup',
      'Hair Styling & Updo',
      'Pre-Wedding Facial',
      'Manicure & Pedicure',
      'Trial Session Included',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section section-padding section-bg" id="pricing">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Pricing Plans</span>
          <h2>
            Choose Your <span className="highlight">Package</span>
          </h2>
          <div className="section-divider" />
          <p>
            Transparent pricing with exceptional value. Choose the package that
            suits your beauty needs.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <motion.div
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {plan.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="pricing-icon">{plan.icon}</div>
                <h4>{plan.title}</h4>
                <div className="price">
                  <span className="currency">$</span>
                  {plan.price}
                  <span className="period"> / package</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FiCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi, I'm interested in the ${plan.title} ($${plan.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-pricing ${
                    plan.popular ? 'btn-gold' : 'btn-outline-dark'
                  }`}
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}