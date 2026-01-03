import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Import images
import logo from './assets/images/logo.jpg';
import about from './assets/images/about.jpg';

export default function About() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #fff;
          margin: 0;
          padding: 0;
        }
        main {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
        }
        h1, h2 {
          color: #222;
          margin-top: 40px;
        }
        .about-container {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 40px;
        }
        .about-text {
          flex: 2;
          min-width: 300px;
        }
        .about-image {
          flex: 1;
          min-width: 250px;
        }
        .about-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        footer {
          padding: 28px 40px;
          color: #9b9b9b;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.6));
        }
      `}</style>

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

        <main>
          <div className="about-container">
            <div className="about-text">
              <p style={{color:'#888', textTransform:'uppercase', fontSize:'0.85rem'}}>Innovation Forum › About</p>
              <h1>About</h1>
              <p>
                The Innovation Forum is an accelerator for healthcare ventures. It is supported by a global grassroots network of over 10,000 innovators who seek to improve human health and wellbeing by translating cutting-edge science into innovative products and services. We focus on the future and the evolution of today's technologies, which range from the nascent stage to the cusp of commercial application.
              </p>
              <h2>Greater Good</h2>
              <p>
                Innovation is a multidisciplinary activity that is key to any country's growth model. It brings together engineers, business professionals, economists, doctors, scientists and policy makers. The Innovation Forum exists to facilitate this multidisciplinary structure by fostering synergy between academia, industry and the public sector to accelerate the speed of technology adoption for the benefit of the wider society.
              </p>
            </div>
            <div className="about-image">
              <img src={about} alt="People networking at an innovation event" />
            </div>
          </div>
        </main>

        <footer style={{padding: '28px 40px', color: '#9b9b9b', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.6))'}}>
          <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <div className="muted">© 2025 Julia Martires</div>
          </div>
        </footer>
      </div>
    </>
  );
}