import React from 'react';
import "../styleSheets/Skills.css";
import techSkills from '../data/techSkills';
import softSkills from '../data/softSkills';



const Skills = () => {
  return (
    <div className="skills">
      <section className="skills-section">
        <h3>Tech Skills:</h3>
        <div className="skills-card">
          {techSkills.map((language, index) => (
            <div key={index} className="skills-container">
              <img src={language.icon} alt="icons" />
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section">
        <h3>Soft Skills:</h3>
        <div className="skills-card">
          {softSkills.map((skill, index) => (
           
              <div key={index} className="skills-container">
                <img src={skill.icon} alt="skill" />
                <p>{skill.skill}</p>
             
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
