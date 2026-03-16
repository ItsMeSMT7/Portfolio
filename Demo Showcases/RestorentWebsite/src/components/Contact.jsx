import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import { contactInfo } from '../data/data';
import { fadeInUp, staggerContainer } from '../animations/variants';
import './Style/Contact.css';

const iconMap = {
  location: <FaMapMarkerAlt />,
  phone: <FaPhone />,
  email: <FaEnvelope />,
  clock: <FaClock />,
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <hr className="section-divider-center" />
        </motion.div>

        <motion.div
          className="row g-4 mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.map((info) => (
            <motion.div key={info.id} className="col-lg-3 col-md-6" variants={fadeInUp}>
              <div className="contact-card">
                <div className="contact-card-icon-wrapper">
                  {iconMap[info.icon]}
                </div>
                <h4 className="contact-card-title">{info.title}</h4>
                {info.lines.map((line, i) => (
                  <p key={i} className="contact-card-text">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="contact-map-wrapper"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SavoryBite Location"
            className="contact-map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;