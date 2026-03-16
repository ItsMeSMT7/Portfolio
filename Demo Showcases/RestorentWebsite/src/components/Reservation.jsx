import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/variants';
import './Style/Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      requests: '',
    });
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-bg">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="Restaurant ambiance"
          className="reservation-bg-image"
        />
      </div>
      <div className="reservation-overlay"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-5"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="reservation-info">
              <span className="section-subtitle">RESERVATION</span>
              <h2 className="section-title reservation-title">Book Your Table</h2>
              <hr className="section-divider" />
              <p className="reservation-desc">
                Reserve your dining experience at SavoryBite. For parties larger than
                8, please contact us directly for our private dining arrangements.
              </p>
              <div className="reservation-contact">
                <div className="reservation-contact-item">
                  <FaPhone className="reservation-contact-icon" />
                  <span>+1 (212) 555-7890</span>
                </div>
                <div className="reservation-contact-item">
                  <FaEnvelope className="reservation-contact-icon" />
                  <span>reservations@savorybite.com</span>
                </div>
              </div>
              <div className="reservation-hours">
                <h4 className="reservation-hours-title">Opening Hours</h4>
                <p className="reservation-hours-text">
                  Monday – Friday: 11:00 AM – 11:00 PM
                </p>
                <p className="reservation-hours-text">
                  Saturday – Sunday: 10:00 AM – 12:00 AM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="reservation-form-card">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    className="reservation-success"
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheckCircle className="success-icon" />
                    <h3 className="success-title">Reservation Confirmed!</h3>
                    <p className="success-text">
                      Thank you for choosing SavoryBite. We look forward to
                      welcoming you.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Date</label>
                          <input
                            type="date"
                            name="date"
                            className="form-input"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Time</label>
                          <input
                            type="time"
                            name="time"
                            className="form-input"
                            value={formData.time}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Number of Guests</label>
                          <select
                            name="guests"
                            className="form-input"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Occasion</label>
                          <select
                            name="occasion"
                            className="form-input"
                            value={formData.occasion}
                            onChange={handleChange}
                          >
                            <option value="">Select Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Business">Business</option>
                            <option value="Casual">Casual</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Special Requests</label>
                          <textarea
                            name="requests"
                            className="form-input form-textarea"
                            placeholder="Any dietary requirements or special requests..."
                            rows="3"
                            value={formData.requests}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="reservation-submit"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 30px rgba(245,158,11,0.4)',
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaCalendarAlt />
                          Reserve My Table
                        </motion.button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;