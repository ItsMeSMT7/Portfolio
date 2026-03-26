import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const results = [
  {
    name: 'Aarav Sharma',
    exam: 'JEE Advanced 2024',
    rank: 'AIR 45',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
  },
  {
    name: 'Priya Patel',
    exam: 'NEET UG 2024',
    rank: 'AIR 12',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
  },
  {
    name: 'Rohan Mehta',
    exam: 'JEE Main 2024',
    rank: 'AIR 89',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
  },
  {
    name: 'Sneha Reddy',
    exam: 'NEET UG 2024',
    rank: 'AIR 34',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
  },
  {
    name: 'Vikram Singh',
    exam: 'JEE Advanced 2024',
    rank: 'AIR 156',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80'
  },
  {
    name: 'Ananya Gupta',
    exam: 'SSC Board 2024',
    rank: '99.2%',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80'
  },
  {
    name: 'Karan Desai',
    exam: 'JEE Main 2024',
    rank: 'AIR 203',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80'
  },
  {
    name: 'Meera Iyer',
    exam: 'NEET UG 2024',
    rank: 'AIR 67',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80'
  }
]

const Results = ({ showAll = false }) => {
  const displayed = showAll ? results : results.slice(0, 4)

  return (
    <section className="results-section section-padding" id="results">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Our <span>Results</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            Consistent top ranks across competitive and board examinations year after year.
          </p>
        </div>

        <div className="results-banner" data-aos="fade-up" data-aos-delay="100">
          <h2>🏆 Our Top Rankers — 2024</h2>
          <p>Celebrating excellence with 500+ selections in JEE, NEET, and Board Exams this year.</p>
        </div>

        <div className="row g-4">
          {displayed.map((student, i) => (
            <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="result-card">
                <div className="rank-badge">
                  <span>🏅</span>
                  {student.rank.includes('AIR') ? 'AIR' : 'Score'}
                </div>
                <img src={student.photo} alt={student.name} className="result-photo" />
                <h5 className="result-name">{student.name}</h5>
                <p className="result-exam">{student.exam}</p>
                <p className="result-rank-text">
                  <strong>{student.rank}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/results" className="btn-primary-custom">
              View All Results <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Results