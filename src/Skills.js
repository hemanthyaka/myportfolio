import React from 'react';
import './Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 95 },
  { name: 'BOOTSTRAP', percentage: 95 },
  { name: 'JAVASCRIPT', percentage: 90 },
  { name: 'REACTJS', percentage: 80 }
];

const Skills = () => {
  return (
    <div id="skills-section" className="skills-section">
      <div className="container skills">
        <center><h2 className="skills-h2">SKILLS</h2></center>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#007bff',
                    trailColor: '#d3e8fb',
                    textSize: '16px',
                  })}
                />
              <h4 className="skill-name">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
