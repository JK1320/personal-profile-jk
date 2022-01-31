import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import projectsData from "../data/projectsData";


function Projects() {

  return (
    <div>
      <Header />
      <div className="projects">
        {projectsData.map((project, index) => (
          <div className="projects-main">
            <div className="project-container">
              <h1>{project.project}</h1>
              <img src={project.image} alt="project information" />
              <div className="live-link">
                <a href={project.link} target="_blank" rel="noReferrer">
                  Live Link
                </a>
                <a href={project.github} target="_blank" rel="noReferrer">
                  github
                </a>
              </div>
            </div>
            <div className="project-info">
              <p>{project.info}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}


export default Projects;
