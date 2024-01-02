// src/components/Portfolio.js

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false); // Close the menu after clicking a link
    }
  };

  return (
    <div className={`portfolio ${showMenu ? 'menu-open' : ''}`}>
      <div
        className="menu-icon"
        onClick={toggleMenu}
        aria-expanded={showMenu}
        role="button"
      >
        <FaBars />
      </div>

      <nav className={`menu ${showMenu ? 'menu-open' : ''}`}>
        <a
          onClick={() => scrollToSection('about-me')}
          role="button"
        >
          About Me
        </a>
        <a
          onClick={() => scrollToSection('projects')}
          role="button"
        >
          Projects
        </a>
        {/* Add more links for other sections */}
      </nav>

      <header>
        <h1>Sujendra Jayant Gharat</h1>
        <p>FullStack Developer, Software Engineer, Data Analyst</p>
      </header>

      <section id="about-me" className="about-me">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer with experience
          in creating responsive and user-friendly websites.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          <a href="#project1">View Project</a>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
          <a href="#project2">View Project</a>
        </div>
      </section>

      {/* Add more sections like Skills, Contact, etc. */}

      <footer>
        <p>Contact: gharat.su@northeastern.edu</p>
      </footer>
    </div>
  );
};

export default Portfolio;
