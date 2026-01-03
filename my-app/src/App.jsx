import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import NewsletterSignup from "./components/NewsletterSignup";

// Import all images
import logo from './assets/images/logo.jpg';
import prisma2 from './assets/images/prisma2.jpg';
import carousel1 from './assets/images/carousel1.jpg';
import carousel2 from './assets/images/carousel2.png';
import carousel3 from './assets/images/carousel3.jpg';
import carousel4 from './assets/images/carousel4.jpg';
import carousel5 from './assets/images/carousel5.jpg';
import FC1 from './assets/images/FC1.png';
import FC2 from './assets/images/FC2.png';
import FC3 from './assets/images/FC3.png';
import FC4 from './assets/images/FC4.png';

export default function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="container top-inner">
          <a href="#" className="top-link">MEMBERS AREA</a>
        </div>
      </div>

      <header>
        <div className="container nav">
          <div className="left-nav">
            <a href="index.html"><img src={logo} width="260" height="80" alt="logo" /></a>
              <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#latest-news">News</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/people">People</Link></li>
                </ul>
              </nav>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{backgroundImage: `url(${prisma2})`}}>
          <div className="hero-content">
            <h1>We Drive Innovative Technology Development By Connecting innovators, industry & investors</h1>
            <a href="#latest-news" className="hero-btn">Read News</a>
            <div className="grid" id="newsGrid"></div>
          </div>

          <aside className="side-panel">
            <h3>Subscribe to our newsletter</h3>
            <NewsletterSignup />
          </aside>
        </section>

        <section>
          <h2 id="latest-news" style={{textAlign: 'center', marginTop: '40px', marginBottom: '10px', color: '#222'}}>Latest News!</h2>

          <div className="grid" id="branchNews"></div>

          <div className="carousel" style={{marginTop: 0}}>
            <div className="slide fade">
              <img src={carousel1} alt="carousel1" />
              <div className="overlay-text">Innovation Forum - Creaducate interview with Dymium</div>
            </div>

            <div className="slide fade">
              <img src={carousel2} alt="carousel2" />
              <div className="overlay-text">Innovation Forum - Interview with Neobe Therapeutics</div>
            </div>

            <div className="slide fade">
              <img src={carousel3} alt="carousel3" />
              <div className="overlay-text">Innovation Forum - Interview with INIA Biosciences | Changing the world of bioelectronic medicine</div>
            </div>

            <div className="slide fade">
              <img src={carousel4} alt="carousel4" />
              <div className="overlay-text">Manchester - Big Data and AI in Genomics in Focus: Event Recap</div>
            </div>

            <div className="slide fade">
              <img src={carousel5} alt="carousel5" />
              <div className="overlay-text">Manchester - The UK Genomics Revolution: The Age of Big Data and AI</div>
            </div>

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <section className="content-cards container">
            <div className="flex-cards">
              <div className="card">
                <img src={FC1} width="360" height="250" alt="FC1" />
              </div>

              <div className="card">
                <img src={FC2} width="360" height="250" alt="FC2" />
              </div>

              <div className="card">
                <img src={FC3} width="360" height="250" alt="FC3" />
              </div>

              <div className="card">
                <img src={FC4} width="400" height="150" alt="FC4" />
              </div>
            </div>
          </section>

          <hr />

          <h4 style={{margin: '0 0 10px'}}>Find your branch</h4>
          <div className="branches" aria-live="polite">
            <span className="branch">Barcelona</span>
            <span className="branch">Cambridge</span>
            <span className="branch">Copenhagen</span>
            <span className="branch">Euskadi</span>
            <span className="branch">Hong Kong</span>
            <span className="branch">Kuala Lumpur</span>
            <span className="branch">Lausanne</span>
            <span className="branch">London</span>
            <span className="branch">Manchester</span>
            <span className="branch">New York</span>
            <span className="branch">Okinawa</span>
          </div>

          <h4>Upcoming events</h4>
          <p>There are no upcoming events.</p>
          <a href="#" className="link">View all events →</a>
        </section>

        <footer>
          <hr />
          <div className="foot-inner">
            <div>
              <strong>Global Innovation Forum Limited</strong>
              <p className="muted">Future Business Centre, King's Hedges Road, Cambridge, CB4 2HY</p>
              <a href="mailto:info@inno-forum.org">info@inno-forum.org</a>
            </div>
            <div className="muted">© Innovation Forum</div>
          </div>
        </footer>
      </main>
    </div>
  );
}