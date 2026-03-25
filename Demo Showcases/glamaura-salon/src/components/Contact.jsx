import React from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: 'Visit Us',
    lines: ['123 Beauty Avenue', 'New York, NY 10001'],
  },
  {
    icon: <FiPhone />,
    title: 'Call Us',
    lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: <FiMail />,
    title: 'Email Us',
    lines: ['hello@glamaura.com', 'booking@glamaura.com'],
  },
  {
    icon: <FiClock />,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9 AM – 8 PM', 'Sunday: 10 AM – 6 PM'],
  },
]

export default function Contact() {
  return (
    <section className="contact-section section-padding section-bg" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Contact Us</span>
          <h2>
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-divider" />
          <p>
            We'd love to hear from you. Reach out to us through any of the
            channels below.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {contactInfo.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="contact-card">
                <div className="contact-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-map" data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182919278!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
            title="Salon Location"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}