import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Style/Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Family Physician',
    avatar: 'https://i.pravatar.cc/150?img=32',
    text: 'MedicoCare Pharmacy has been my go-to recommendation for patients. Their staff is incredibly knowledgeable, medicines are always genuine, and the service is exceptional.',
    rating: 5,
  },
  {
    name: 'Rajesh Sharma',
    role: 'Regular Customer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: 'I\'ve been ordering medicines from MedicoCare for over 3 years. The home delivery is always on time, and the pharmacist always takes time to explain the dosage properly.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    avatar: 'https://i.pravatar.cc/150?img=26',
    text: 'Outstanding pharmacy! The online consultation feature saved me so much time. Professional staff, genuine products, and excellent customer support. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Senior Citizen',
    avatar: 'https://i.pravatar.cc/150?img=59',
    text: 'As a senior citizen, I truly appreciate their patience and care. They even remind me when it\'s time to refill my prescriptions. That\'s real customer service!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'New Mother',
    avatar: 'https://i.pravatar.cc/150?img=45',
    text: 'Finding baby medicines was always stressful until I discovered MedicoCare. They have everything for infants and their 24/7 support has been a lifesaver for new parents!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <span className="badge-dot" />
            Testimonials
          </div>
          <h2 className="section-title">
            What Our <span className="highlight">Customers Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience with MedicoCare Pharmacy.
          </p>
        </div>
      </Container>

      <div className="testimonial-slider-wrapper" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          centeredSlides
          slidesPerView={1.2}
          spaceBetween={30}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="testimonial-card"
                whileHover={{ y: -8 }}
              >
                <div className="testimonial-quote-icon">
                  <FaQuoteLeft />
                </div>

                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                <p className="testimonial-text">{t.text}</p>

                <div className="testimonial-author">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-author-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;