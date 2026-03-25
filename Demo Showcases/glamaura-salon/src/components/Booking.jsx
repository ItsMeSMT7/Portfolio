import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiClock,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageCircle,
} from 'react-icons/fi'

const WHATSAPP_NUMBER = '1234567890'

const services = [
  'Hair Cut & Styling',
  'Hair Coloring',
  'Facial Treatments',
  'Makeup Services',
  'Bridal Packages',
  'Spa & Relaxation',
]

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hello! I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  const quickBook = () => {
    const message = encodeURIComponent(
      'Hello, I want to book an appointment at your salon.'
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <section className="booking-section section-padding section-bg" id="booking">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Book Now</span>
          <h2>
            Schedule Your <span className="highlight">Appointment</span>
          </h2>
          <div className="section-divider" />
          <p>
            Ready for a transformation? Book your session with us and let our
            experts take care of the rest.
          </p>
        </div>

        <div className="booking-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">
            <div className="col-lg-5">
              <div className="booking-info">
                <h3>Get in Touch</h3>
                <p>
                  Fill out the form or reach out to us directly. We'd love to
                  hear from you and help you book your perfect appointment.
                </p>
                <div className="booking-info-items">
                  <div className="booking-info-item">
                    <div className="info-icon"><FiMapPin /></div>
                    <span>123 Beauty Avenue, New York, NY 10001</span>
                  </div>
                  <div className="booking-info-item">
                    <div className="info-icon"><FiPhone /></div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="booking-info-item">
                    <div className="info-icon"><FiClock /></div>
                    <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="booking-info-item">
                    <div className="info-icon"><FiCalendar /></div>
                    <span>Sunday: 10:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <button className="btn-gold mt-4" onClick={quickBook}>
                  <FiMessageCircle /> Quick WhatsApp Booking
                </button>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="booking-form-wrapper">
                <h3>Book Appointment</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating-custom">
                        <label>Select Service</label>
                        <select
                          className="form-select"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose a service...</option>
                          {services.map((s, i) => (
                            <option key={i} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <label>Preferred Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <label>Preferred Time</label>
                        <input
                          type="time"
                          className="form-control"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <button type="submit" className="btn-primary-custom w-100 justify-content-center">
                        <FiSend /> Book Now via WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}