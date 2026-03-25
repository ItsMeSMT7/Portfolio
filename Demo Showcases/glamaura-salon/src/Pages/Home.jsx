import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services showFilter={false} limit={6} />

      {/* CTA Banner */}
      <section className="section-padding section-bg">
        <div className="container">
          <div className="cta-banner" data-aos="zoom-in">
            <h2>Ready for a New Look?</h2>
            <p>
              Book your appointment today and let our experts create a stunning
              transformation just for you.
            </p>
            <div className="btn-wrapper">
              <Link to="/contact" className="btn-gold">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <About />
      <Team />
      <Gallery limit={6} />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
  )
}