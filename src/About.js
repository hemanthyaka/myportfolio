import React from "react";
import './About.css';  

const About = () => {
  return (
    <section className="about-section">
      <div className="container about">
        <h2 className=" about-h2">About Me</h2>
        <p className="aboutSection about-p-1">
          Hello! I'm Yaka Hemanth, a passionate web developer with a strong background in ReactJS, JavaScript, and front-end development. I love creating clean and responsive web applications that provide great user experiences. 
        </p>
        <p className="aboutSection about-p-2">
          I’m constantly learning new technologies and improving my skills to stay updated with the latest trends in web development. My goal is to build innovative solutions that make an impact.
        </p>
        <p className="aboutSection about-p-3">
          Outside of coding, I enjoy exploring new tech, working on open-source projects, and contributing to the developer community. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
