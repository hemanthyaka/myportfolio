import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React, showcasing my work and skills.',
    githubLink: 'https://github.com/your-username/portfolio'
  },
  {
    title: 'Food Website',
    description: 'It is just a user interface website with HTML, CSS and BOOTSTRAP.',
    githubLink: 'https://github.com/your-username/ecommerce-app'
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id='projects-section'>
      <div className="container-fluid projects">
        <h2 className='projects-h2'>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
