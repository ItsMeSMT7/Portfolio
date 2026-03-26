import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaClock, FaArrowRight } from 'react-icons/fa'

const coursesData = [
  {
    id: 1,
    title: 'JEE Main & Advanced',
    category: 'Engineering',
    description: 'Comprehensive preparation for JEE with expert IITian faculty, regular tests, and doubt-clearing sessions.',
    duration: '2 Years',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80'
  },
  {
    id: 2,
    title: 'NEET UG Preparation',
    category: 'Medical',
    description: 'Structured NEET coaching with biology-focused approach, NCERT mastery, and extensive practice.',
    duration: '2 Years',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80'
  },
  {
    id: 3,
    title: 'Foundation Course (8-10)',
    category: 'Foundation',
    description: 'Build a strong foundation in science and mathematics for future competitive exam success.',
    duration: '1 Year',
    badge: 'Early Start',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80'
  },
  {
    id: 4,
    title: 'SSC Board Excellence',
    category: 'Board',
    description: 'Score 90%+ in SSC boards with focused coaching, regular assessments, and exam strategies.',
    duration: '1 Year',
    badge: 'Board Topper',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80'
  },
  {
    id: 5,
    title: 'HSC Science & Commerce',
    category: 'Board',
    description: 'Complete HSC preparation with board exam focus and simultaneous entrance exam readiness.',
    duration: '2 Years',
    badge: 'Complete Package',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
  },
  {
    id: 6,
    title: 'Crash Course – JEE/NEET',
    category: 'Engineering',
    description: 'Intensive short-term revision and practice program for last-minute exam preparation.',
    duration: '3 Months',
    badge: 'Fast Track',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80'
  }
]

const categories = ['All', 'Engineering', 'Medical', 'Foundation', 'Board']

const Courses = ({ showAll = false }) => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? coursesData : coursesData.filter((c) => c.category === active)
  const displayed = showAll ? filtered : filtered.slice(0, 4)

  return (
    <section className="courses-section section-padding" id="courses">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Our <span>Courses</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            Industry-leading programs designed for competitive exam success and academic excellence.
          </p>
        </div>

        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          <AnimatePresence>
            {displayed.map((course, i) => (
              <motion.div
                className="col-lg-3 col-md-6"
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                layout
              >
                <div className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <span className="course-badge">{course.badge}</span>
                  </div>
                  <div className="course-body">
                    <div className="course-category">{course.category}</div>
                    <h4 className="course-title">{course.title}</h4>
                    <p className="course-desc">{course.description}</p>
                    <div className="course-meta">
                      <span className="course-duration">
                        <FaClock /> {course.duration}
                      </span>
                      <Link to="/contact" className="course-cta">
                        Enroll <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/courses" className="btn-primary-custom">
              View All Courses <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Courses