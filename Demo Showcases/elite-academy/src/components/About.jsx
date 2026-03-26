import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const features = [
  'Experienced faculty from IITs, NITs, and AIIMS',
  'Proven track record with 500+ top rankers',
  'Structured and result-oriented learning methodology',
  'Regular mock tests and performance analysis',
  'Personalized doubt-clearing sessions',
  'State-of-the-art classrooms and study material'
]

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
                alt="About Elite Academy"
              />
              <div className="about-experience-badge">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content">
              <h2>
                About <span className="gradient-text">Elite Academy</span>
              </h2>
              <p className="lead">
                Founded with a vision to create future leaders, Elite Academy has been at the forefront of coaching excellence for over a decade. Our mission is to provide world-class education accessible to every ambitious student.
              </p>
              <p className="lead">
                We combine traditional teaching wisdom with modern pedagogical techniques to deliver an unmatched learning experience.
              </p>

              <ul className="about-features">
                {features.map((f, i) => (
                  <li key={i}>
                    <span className="about-feature-icon">
                      <FaCheckCircle />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/about" className="btn-primary-custom">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About