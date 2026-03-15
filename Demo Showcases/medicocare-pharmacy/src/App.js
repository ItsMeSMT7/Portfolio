import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Preloader />}
      <NavbarComponent />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Products />
      <WhyChoose />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;