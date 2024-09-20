import React from 'react';
import './Home.css';
import myimage from './asserts/images/myimage.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="home-section" id="home-section">
      <div className="container home">
        <div className="intro-text">
          <h2 className="home-h2">Welcome to My Portfolio</h2>
          <h1 className="home-h1">I'm Yaka Hemanth</h1>
          <p className="home-p">A passionate Developer & Designer</p>
           <Link
                  activeClass="active"
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="btn home-btn nav-link"
                >
                  View My Work
                </Link>
        </div>
        <div className="intro-image">
          <img src={myimage} alt="Yaka Hemanth" className="my-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
