import React from 'react'

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    title: 'Modern Classrooms',
    desc: 'State-of-the-art learning spaces',
    className: 'tall'
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    title: 'Collaborative Learning',
    desc: 'Students working together',
    className: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    title: 'Expert Seminars',
    desc: 'Knowledge sharing sessions',
    className: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'Annual Events',
    desc: 'Celebrations and awards',
    className: 'wide'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    title: 'Study Sessions',
    desc: 'Focused learning environment',
    className: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    title: 'Exam Preparation',
    desc: 'Mock tests and practice',
    className: ''
  }
]

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <div className="text-center section-header" data-aos="fade-up">
          <h2 className="section-title">
            Campus <span>Gallery</span>
          </h2>
          <div className="section-line" />
          <p className="section-subtitle mt-3">
            A glimpse into our vibrant campus and learning environment.
          </p>
        </div>

        <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
          {galleryItems.map((item, i) => (
            <div className={`gallery-item ${item.className}`} key={i}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery