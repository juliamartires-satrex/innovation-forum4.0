import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Import logo image
import logo from './assets/images/logo.jpg';

// Import person images
import person1 from './assets/images/person1.png';
import person2 from './assets/images/person2.png';
import person3 from './assets/images/person3.jpg';
import person4 from './assets/images/person4.png';
import person5 from './assets/images/person5.jpg';
import person6 from './assets/images/person6.png';
import person7 from './assets/images/person7.jpg';
import person8 from './assets/images/person8.png';
import person9 from './assets/images/person9.jpg';
import person10 from './assets/images/person10.png';

export default function People() {
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
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px 100px;
        }

        h1 {
          font-size: 2rem;
          color: #222;
          margin-bottom: 20px;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 30px;
        }

        .filter-btn {
          border: 2px solid #00a0df;
          background: none;
          color: #00a0df;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background-color: #00a0df;
          color: #fff;
        }

        .people-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .person-card {
          text-align: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .person-card img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          display: block;
        }

        .hover-text {
          position: absolute;
          inset: 0;
          background: rgba(0,160,223,0.92);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: bold;
          font-size: 1rem;
        }

        .person-card:hover .hover-text {
          opacity: 1;
        }

        .person-name {
          font-weight: bold;
          margin-top: 10px;
          color: #222;
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
          <p style={{color:'#888', textTransform:'uppercase', fontSize:'0.85rem'}}>Innovation Forum › People</p>
          <h1>The people behind the Innovation Forum</h1>

          <div className="filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Leadership Team</button>
            <button className="filter-btn">Current Team</button>
            <button className="filter-btn">Alumni</button>
            <button className="filter-btn">Advisory Board</button>
          </div>

          <div className="people-grid">

            <div className="person-card">
              <img src={person1} alt="Person 1" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Marek Tyl</div>
            </div>

            <div className="person-card">
              <img src={person2} alt="Person 2" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Daniel Moreno</div>
            </div>

            <div className="person-card">
              <img src={person3} alt="Person 3" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Ajoeb Baridi</div>
            </div>

            <div className="person-card">
              <img src={person4} alt="Person 4" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Paul Varley</div>
            </div>

            <div className="person-card">
              <img src={person5} alt="Person 5" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Piotr Gierszewski</div>
            </div>

            <div className="person-card">
              <img src={person6} alt="Person 6" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Claire Brown</div>
            </div>

            <div className="person-card">
              <img src={person7} alt="Person 7" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Rafal Zakrzewski</div>
            </div>

            <div className="person-card">
              <img src={person8} alt="Person 8" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Lily Cortese</div>
            </div>

            <div className="person-card">
              <img src={person9} alt="Person 9" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Barbara Domayne-Hayman</div>
            </div>

            <div className="person-card">
              <img src={person10} alt="Person 10" />
              <div className="hover-text">Bio or role appears here</div>
              <div className="person-name">Dr Hitesh Sanganee</div>
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