import React, { useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const AdmissionForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello, my name is ${form.name}. Phone: ${form.phone}. I'm interested in: ${form.course}. Message: ${form.message}`
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const whatsappDirect = () => {
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent('Hello, I want to know more about your coaching institute courses.')}`,
      '_blank'
    )
  }

  return (
    <section className="admission-section section-padding" id="admission">
      <div className="container">
        <div className="admission-wrapper">
          <div className="row g-0">
            <div className="col-lg-5">
              <div className="admission-info" data-aos="fade-right">
                <h3>Begin Your Success Journey</h3>
                <p>Take the first step towards academic excellence.</p>

                <div className="admission-info-item">
                  <div className="admission-info-icon"><FaPhone /></div>
                  <div className="admission-info-text">
                    <h6>Call Us</h6>
                    <span>+91 99999 99999</span>
                  </div>
                </div>

                <div className="admission-info-item">
                  <div className="admission-info-icon"><FaEnvelope /></div>
                  <div className="admission-info-text">
                    <h6>Email Us</h6>
                    <span>info@eliteacademy.edu</span>
                  </div>
                </div>

                <div className="admission-info-item">
                  <div className="admission-info-icon"><FaMapMarkerAlt /></div>
                  <div className="admission-info-text">
                    <h6>Visit Us</h6>
                    <span>123, Academic Road, Education City</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="admission-form-wrapper" data-aos="fade-left">
                <h3>Enquiry Form</h3>
                <p>Fill in your details and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control-custom"
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control-custom"
                          placeholder="Enter phone number"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="course">Select Course</label>
                    <select
                      id="course"
                      name="course"
                      className="form-control-custom"
                      value={form.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a course</option>
                      <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                      <option value="NEET UG">NEET UG Preparation</option>
                      <option value="Foundation (8-10)">Foundation Course (8-10)</option>
                      <option value="SSC Board">SSC Board Excellence</option>
                      <option value="HSC Science & Commerce">HSC Science & Commerce</option>
                      <option value="Crash Course">Crash Course – JEE/NEET</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control-custom"
                      placeholder="Any specific queries..."
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Apply Now
                  </button>

                  <button type="button" className="whatsapp-inquiry" onClick={whatsappDirect}>
                    <FaWhatsapp size={20} /> Quick WhatsApp Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionForm