
import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import banner from './assets/banner.png';

function Ignite() {
  return (
    <div className="Index">
      <header className="hero-section">
        <img src={logo} alt="IGNITE Logo" className="logo" />
        <h1>IGNITE</h1>
        <p1>Impact Global Network for Innovation, Transformation & Empowerment</p1>
        <a href="https://your-typeform-link.com" target="_blank" rel="noreferrer" className="cta-button">Join Now - Membership is FREE</a>
      </header>

      <section className="about-section">
        <h2>About IGNITE</h2>
        <p>IGNITE is an initiative of NXG-HUB Digital Technologies. We seek to build the largest community of agile tech-driven minds that will drive global transformation in diverse sectors.</p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Empowerment</h3>
          <p>Programs focused on building individual potential and leadership.</p>
        </div>
        <div className="feature-card">
          <h3>Networking</h3>
          <p>Connect with bright minds globally.</p>
        </div>
        <div className="feature-card">
          <h3>Innovation</h3>
          <p>Explore and lead cutting-edge digital initiatives.</p>
        </div>
      </section>

      <section className="banner-section">
        <img src={banner} alt="Join the IGNITE Network" className="banner-img" />
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} IGNITE by NXG-HUB Digital Technologies LTD</p>
      </footer>
    </div>
  );
}

export default Ignite;
