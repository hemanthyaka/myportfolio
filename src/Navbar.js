import React from 'react';
import { Link } from 'react-scroll';
import './NAvbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">YAKA HEMANTH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
