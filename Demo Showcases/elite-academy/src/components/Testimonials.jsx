import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rahul Verma',
    role: 'JEE Advanced — AIR 78',
    text: 'Elite Academy transformed my preparation journey. The faculty genuinely care about each student.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
  },
  {
    name: 'Pooja Deshmukh',
    role: 'NEET UG — AIR 23',
    text: 'The biology faculty here is outstanding. Regular mock tests and detailed analysis sessions were game-changers.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
  },
  {
    name: 'Arjun Reddy',
    role: 'JEE Main — 99.8 Percentile',
    text: 'What sets Elite Academy apart is their problem-solving methodology. Every concept is taught with depth.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80'
  },
  {
    name: 'Kavya Nair',
    role: 'SSC Board — 98.6%',
    text: 'I joined for board exam preparation and scored way beyond my expectations. Teachers make every topic simple.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80'
  },
  {
    name: 'Aditya Joshi',
    role: 'NEET UG — AIR 156',
    text: 'The disciplined environment and supportive faculty helped me stay focused throughout my preparation.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
  },
  {
    name: 'Shreya Kapoor',
    role: 'JEE Advanced — AIR 234',
    text: 'From doubt-clearing sessions to motivational talks, Elite Academy covers everything a student needs.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            What Our <span style={{ color: '#0EA5E9' }}>Students Say</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            Hear directly from our students who achieved their dreams with Elite Academy.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials