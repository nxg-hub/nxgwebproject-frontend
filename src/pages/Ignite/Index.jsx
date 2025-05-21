// Ignite.js
import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import banner from './assets/banner.png';

function Ignite() {
    return (
        <div className="Index">

            {/* Wrapper to center the globe */}
            <div className="background-globe-wrapper" aria-hidden="true">
                <div className="background-globe">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        className="globe-icon"
                        fill="currentColor"
                    >
                        <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="2" fill="none"/>
                        <path d="M32 2 A30 30 0 0 1 32 62 A30 30 0 0 1 32 2" stroke="black" strokeWidth="2"
                              fill="none"/>
                    </svg>
                </div>
            </div>

            <header className="hero-section">
                <a href="https://nextgenhub.com.ng">
                    <img src={logo} alt="IGNITE Logo" className="logo"/>
                </a>
                <p1>IGNITE</p1>
                <p2>Impact Global Network for Innovation, Transformation & Empowerment</p2>
                <a href="https://tally.so/r/n95a9E" target="_blank" rel="noreferrer" className="cta-button">
                    Join Now - Membership is FREE
                </a>
            </header>

            <section className="about-section">
                <p2>About IGNITE</p2>
                <p>IGNITE is an initiative of NXG-HUB Digital Technologies. We seek to build the largest community of
                    agile tech-driven minds that will drive global transformation in diverse sectors.</p>
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
                <a href="https://tally.so/r/n95a9E" target="_blank" rel="noreferrer">
                    <img src={banner} alt="Join the IGNITE Network" className="banner-img"/>
                </a>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} IGNITE by NXG-HUB Digital Technologies LTD</p>
            </footer>
        </div>
    );
}

export default Ignite;

//
// import React from 'react';
// import './App.css';
// import logo from './assets/logo.png';
// import banner from './assets/banner.png';
//
// function Ignite() {
//   return (
//     <div className="Index">
//       <header className="hero-section">
//         <img src={logo} alt="IGNITE Logo" className="logo" />
//         <p1>IGNITE</p1>
//         <p1>Impact Global Network for Innovation, Transformation & Empowerment</p1>
//         <a href="https://your-typeform-link.com" target="_blank" rel="noreferrer" className="cta-button">Join Now - Membership is FREE</a>
//       </header>
//
//       <section className="about-section">
//         <p1>About IGNITE</p1>
//         <p>IGNITE is an initiative of NXG-HUB Digital Technologies. We seek to build the largest community of agile tech-driven minds that will drive global transformation in diverse sectors.</p>
//       </section>
//
//       <section className="features-section">
//         <div className="feature-card">
//           <h3>Empowerment</h3>
//           <p>Programs focused on building individual potential and leadership.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Networking</h3>
//           <p>Connect with bright minds globally.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Innovation</h3>
//           <p>Explore and lead cutting-edge digital initiatives.</p>
//         </div>
//       </section>
//
//       <section className="banner-section">
//         <img src={banner} alt="Join the IGNITE Network" className="banner-img" />
//       </section>
//
//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} IGNITE by NXG-HUB Digital Technologies LTD</p>
//       </footer>
//     </div>
//   );
// }
//
// export default Ignite;
