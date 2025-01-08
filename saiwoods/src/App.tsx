import React from 'react';
import Nav from './Home/nav';
import Footer from './footer/footer';
import Home from './Home/Home';
import About from './contentsection/About';
import ServicesSection from './contentsection/services';
import Gallery from './contentsection/Gallery';
import CTASection from './contentsection/Cta-section';

const App = () => {
  return (
    <div>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="woodsupply">
        {/* Woodsupply section */}
      </section>
      <section id="clientresources">
        <CTASection />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        {/* Contact section */}
      </section>
      <Footer />
    </div>
  );
};

export default App;
