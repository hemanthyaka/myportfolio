import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NAvbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const closeNav = () => setIsNavCollapsed(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home-section">YAKA HEMANTH</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link"
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link"
                  onClick={closeNav}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link"
                  onClick={closeNav}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link"
                  onClick={closeNav}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link"
                  onClick={closeNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
