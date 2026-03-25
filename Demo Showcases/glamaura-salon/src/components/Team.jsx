import React from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

const teamMembers = [
  {
    name: 'Sophia Laurent',
    role: 'Creative Director',
    experience: '12 Years Experience',
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
  },
  {
    name: 'Isabella Monroe',
    role: 'Senior Hair Stylist',
    experience: '10 Years Experience',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  },
  {
    name: 'Olivia Chen',
    role: 'Makeup Artist',
    experience: '8 Years Experience',
    image:
      'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&q=80',
  },
  {
    name: 'Emma Williams',
    role: 'Skin Care Specialist',
    experience: '9 Years Experience',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
  },
]

export default function Team() {
  return (
    <section className="team-section section-padding section-bg-alt" id="team">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Our Team</span>
          <h2>
            Meet Our <span className="highlight">Experts</span>
          </h2>
          <div className="section-divider" />
          <p>
            Our talented team of beauty professionals are passionate about making
            you look and feel amazing.
          </p>
        </div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <motion.div
                className="team-card"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#"><FiInstagram /></a>
                      <a href="#"><FiTwitter /></a>
                      <a href="#"><FiLinkedin /></a>
                    </div>
                  </div>
                </div>
                <div className="team-card-body">
                  <h4>{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-exp">{member.experience}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}