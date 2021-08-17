import {useState} from "react";
import './App.css';
import projectsData from "./data/projectsData";
import Projects from "./Projects";
import languages from "./data/languages";
import Header from "./Header";


function App() {
const [showState, setShowState] = useState("start");

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
      <div className="header-nav">
        <div className="heading">
          <h1>Jasvir Kaur</h1>
          <h3>
            Recent Full Stack Web Developer graduate who is looking for a first
            opportunity to work as a junior Software Developer
          </h3>
        </div>
      </div>
      {showState === "projects" && (
        <div>
          <h3 className="projects-heading">Projects with React:</h3>
          <Projects projectsData={projectsData} />
        </div>
      )}

      {showState === "start" && (
        <div className="about">
          <h3>About</h3>
          <p>
            I joined CYF last year and took this great opportunity to learn
            computer languages. I started with HTML and then CSS. I also learned
            JavaScript and React. Even though My skills are basics at the moment
            but I practice these skills every day to improve.
          </p>
        </div>
      )}

      {showState === "languages" && (
        <div>
          <h3 className="projects-heading">Tech Skills:</h3>
          <div className="languages">
            {languages.map((language, index) => (
              <div className="lists" key={index}>
                <h3>{language.language}</h3>
                <img src={language.icon} alt="icons" />
              </div>
            ))}
          </div>
          <div>
            <h3>Soft Skills:</h3>
            <div>Communication</div>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default App;
