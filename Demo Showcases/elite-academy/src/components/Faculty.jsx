import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const facultyData = [
  {
    name: 'Dr. Rajesh Kumar',
    subject: 'Physics',
    experience: '18 Years Experience',
    bio: 'IIT Delhi alumnus, passionate about making physics intuitive.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
  },
  {
    name: 'Prof. Sunita Verma',
    subject: 'Chemistry',
    experience: '15 Years Experience',
    bio: 'Expert in organic chemistry with innovative teaching methods.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    name: 'Mr. Arjun Nair',
    subject: 'Mathematics',
    experience: '12 Years Experience',
    bio: 'NIT Trichy graduate, renowned for his problem-solving techniques.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Dr. Kavitha Rao',
    subject: 'Biology',
    experience: '14 Years Experience',
    bio: 'AIIMS alumna, specializes in NEET biology preparation.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  },
  {
    name: 'Mr. Amit Saxena',
    subject: 'Physical Chemistry',
    experience: '10 Years Experience',
    bio: 'Known for conceptual clarity and practical teaching approach.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Ms. Deepika Joshi',
    subject: 'English & Aptitude',
    experience: '11 Years Experience',
    bio: 'Expert in communication skills and competitive exam aptitude.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
  },
  {
    name: 'Dr. Sanjay Gupta',
    subject: 'Organic Chemistry',
    experience: '16 Years Experience',
    bio: 'Published researcher with a knack for simplifying complex reactions.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
  },
  {
    name: 'Prof. Meena Kapoor',
    subject: 'Mathematics',
    experience: '20 Years Experience',
    bio: 'Veteran educator known for producing consistent top rankers.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  }
]

const Faculty = ({ showAll = false }) => {
  const displayed = showAll ? facultyData : facultyData.slice(0, 4)

  return (
    <section className="faculty-section section-padding" id="faculty">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Our Expert <span>Faculty</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            Learn from the best minds — IITians, NITians, and experienced educators with a proven track record.
          </p>
        </div>

        <div className="row g-4">
          {displayed.map((fac, i) => (
            <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="faculty-card">
                <div className="faculty-image-wrapper">
                  <img src={fac.photo} alt={fac.name} />
                  <div className="faculty-overlay">
                    <p>{fac.bio}</p>
                  </div>
                </div>
                <div className="faculty-info">
                  <h5 className="faculty-name">{fac.name}</h5>
                  <p className="faculty-subject">{fac.subject}</p>
                  <p className="faculty-exp">{fac.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/faculty" className="btn-primary-custom">
              Meet All Faculty <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Faculty