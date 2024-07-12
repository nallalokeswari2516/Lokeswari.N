import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="home-nav">
          <ul>
            <li><a href="home" onClick={() => scrollToSection('home')}>HOME</a></li>
            <li><a href="blog" onClick={() => scrollToSection('blog')}>BLOG</a></li>
            <li><a href="about" onClick={() => scrollToSection('about')}>ABOUT</a></li>
            <li><a href="workshops" onClick={() => scrollToSection('workshops')}>WORKSHOPS</a></li>
            <li><a href="resources" onClick={() => scrollToSection('resources')}>RESOURCES</a></li>
            <li><a href="contact" onClick={() => scrollToSection('contact')}>CONTACT</a></li>
            <li><a href="help" onClick={() => scrollToSection('help')}>HELP</a></li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <div id="home">
          <h1>Solo Travel</h1>
          <h2>Traveling solo means getting to know the real you.</h2>
          <p>Solo travel can be done independently or on a group tour.</p>
          <Link to="/get-started" className="home-button">Get Started</Link>

        </div>
        <div id="blog">
          {/* Blog section content */}
        </div>
        <div id="about">
          {/* About section content */}
        </div>
        <div id="workshops">
          {/* Workshops section content */}
        </div>
        <div id="resources">
          {/* Resources section content */}
        </div>
        <div id="contact">
          {/* Contact section content */}
        </div>
        <div id="help">
          {/* Help section content */}
        </div>
      </main>
    </div>
  );
};

export default Home;
