import React from 'react';
import Header from '../components/Header';
import techSkills from '../data/techSkills';
import softSkills from '../data/softSkills';
import Footer from '../components/Footer';


const Skills = () => {
  return (
    <div>
      <Header />
      <section className="tech-skills-section">
        <h3 className="tech-heading">Tech Skills:</h3>
        <div className="languages">
          {techSkills.map((language, index) => (
            <div className="container-tech-skills" key={index}>
              {/* <h3>{language.language}</h3> */}
              <img src={language.icon} alt="icons" />
            </div>
          ))}
        </div>
      </section>
      <section className="soft-skills-section">
        <h3>Soft Skills:</h3>
        <div className="skills">
          {softSkills.map((skill, index) => (
            <div className="soft-skills-div" key={index}>
              <img className="skill-img" src={skill.icon} alt="skill" />
              <h4 className="skill-name">{skill.skill}</h4>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
