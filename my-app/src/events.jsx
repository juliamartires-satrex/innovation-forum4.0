import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Import logo image
import logo from './assets/images/logo.jpg';

export default function Events() {
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

        <main style={{paddingBottom: '300px'}}>
          <p style={{color:'#888', textTransform:'uppercase', fontSize:'0.85rem'}}>Innovation Forum › Events</p>
          <p>There are no upcoming events yet.</p>
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