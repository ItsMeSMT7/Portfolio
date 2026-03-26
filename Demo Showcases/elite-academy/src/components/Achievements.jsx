import React, { useRef } from 'react'
import { FaUserGraduate, FaTrophy, FaChartLine, FaAward } from 'react-icons/fa'
import { useCountUp } from 'react-countup'

const Counter = ({ end, suffix, duration }) => {
  const countUpRef = useRef(null)
  useCountUp({
    ref: countUpRef,
    end,
    suffix,
    duration,
    enableScrollSpy: true,
    scrollSpyOnce: true
  })
  return <span ref={countUpRef} />
}

const achievements = [
  { icon: <FaUserGraduate />, number: 10000, suffix: '+', label: 'Students Trained' },
  { icon: <FaTrophy />, number: 500, suffix: '+', label: 'Top Rankers' },
  { icon: <FaChartLine />, number: 95, suffix: '%', label: 'Success Rate' },
  { icon: <FaAward />, number: 10, suffix: '+', label: 'Years of Excellence' }
]

const Achievements = () => {
  return (
    <section className="achievements-section section-padding">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Why Choose <span>Elite Academy</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            A decade of academic excellence with unmatched results and dedicated mentorship.
          </p>
        </div>

        <div className="row g-4">
          {achievements.map((item, i) => (
            <div className="col-lg-3 col-sm-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="achievement-card">
                <div className="achievement-icon">{item.icon}</div>
                <div className="achievement-number">
                  <Counter end={item.number} suffix={item.suffix} duration={2.5} />
                </div>
                <div className="achievement-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements