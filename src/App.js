import {useState} from "react";
import './App.css';
import projectsData from "./data/projectsData";
import Projects from "./Projects";
import languages from "./data/languages";
import Header from "./Header";


function App() {
const [showState, setShowState] = useState("start");

const softSkills = [
  {
    skill: "Communication",
    icon: "https://w7.pngwing.com/pngs/488/518/png-transparent-computer-icons-communication-logo-font-communication-miscellaneous-computer-network-text.png",
  },
  {
    skill: "Team-work",
    icon: "https://cdn5.vectorstock.com/i/thumb-large/04/49/teamwork-concept-logo-team-work-icon-on-white-vector-26860449.jpg",
  },
  {
    skill: "Presentation",
    icon: "https://www.pinclipart.com/picdir/middle/332-3323837_presentation-clipart-presentation-skill-png-download.png",
  },
  {
    skill: " Leadership",
    icon: "https://www.ratchetandwrench.com/ext/resources/Publication/2017/0817/icon-1623888_960_720.jpg?1503507235",
  },
  {
    skill: "Time Management",
    icon: "https://www.pinclipart.com/picdir/big/147-1478958_dont-lose-track-of-time-month-clipart.png",
  },
  {
    skill: "Problem-solving",
    icon: "https://cdn1.vectorstock.com/i/thumb-large/00/05/problem-solving-flat-vector-22830005.jpg",
  },
];

// show Projects' page
function triggerProjects () {
  setShowState("projects")
}

// show languages' page
function triggerLanguages () {
  setShowState("languages")
}

// show home page
function triggerHome () {
  setShowState("start")
}


  return (
    <div className="main">
      <Header
        triggerHome={triggerHome}
        triggerLanguages={triggerLanguages}
        triggerProjects={triggerProjects}
      />
      {/* <div className="header-nav">
        <div className="heading">
          <h1>Jasvir Kaur</h1>
          <h4>
            Recent Full Stack Web Developer graduate who is looking for a first
            opportunity to work as a Junior Software Developer
          </h4>
        </div>
      </div> */}
      {showState === "projects" && (
        <div>
          <h3 className="projects-heading">Projects with React:</h3>
          <Projects projectsData={projectsData} />
        </div>
      )}

      {showState === "start" && (
        <>
         <div className="header-nav">
        <div className="heading">
          <h1>Jasvir Kaur</h1>
          <h4>
            Recent Full Stack Web Developer graduate who is looking for a first
            opportunity to work as a Junior Software Developer
          </h4>
        </div>
      </div>
        <div className="about">
          <h3>About</h3>
          <p>
            I joined Code Your Future in 2020 and took a great opportunity to
            become a Full Stack Web Developer. I learned HTML/CSS,
            JavaScript(React), Node.js and PostgreSQL. Even though My skills are
            basics at the moment but I practice these skills every day to
            improve.
          </p>
        </div>
        </>
      )}

      {showState === "languages" && (
        <div>
          <section className="tech-skills-section">
            <h3 className="tech-heading">Tech Skills:</h3>
            <div className="languages">
              {languages.map((language, index) => (
                <div className="container" key={index}>
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
                <div className="skill-div" key={index}>
                  <img className="skill-img" src={skill.icon} alt="skill" />
                  <h4 className="skill-name">{skill.skill}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      {/* <Projects /> */}
    </div>
  );
  
}

export default App;
