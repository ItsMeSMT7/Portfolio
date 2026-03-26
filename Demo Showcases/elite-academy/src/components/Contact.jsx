import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Our Address',
    text: '123, Academic Road, Education City,\nMaharashtra — 400001'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone Number',
    text: '+91 99999 99999\n+91 88888 88888'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    text: 'info@eliteacademy.edu\nadmissions@eliteacademy.edu'
  },
  {
    icon: <FaClock />,
    title: 'Working Hours',
    text: 'Mon – Sat: 7:00 AM – 9:00 PM\nSunday: 9:00 AM – 1:00 PM'
  }
]

const Contact = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            Have questions? Reach out to us and our team will assist you promptly.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {contactInfo.map((info, i) => (
            <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-info-text">
                  <h5>{info.title}</h5>
                  <p style={{ whiteSpace: 'pre-line' }}>{info.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783953817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Academy Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact