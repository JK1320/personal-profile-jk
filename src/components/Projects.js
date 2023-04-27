import React from "react";
import projectsData from "../data/projectsData";
import "../styleSheets/Projects.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Projects() {

  return (
    <div className="projects">
      <Navbar />
      {/* <h3>Projects:</h3> */}

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="projects-main">
            <div className="project-img-box">
              <img src={project.image} alt="project information" />
            </div>
            <div className="project-info">
              <h4>{project.project}</h4>
              {/* <p>{project.info}</p> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo sed mi non fringilla. Nulla aliquam neque eu enim
                imperdiet suscipit.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed commodo sed mi non fringilla. Nulla aliquam
                neque eu enim imperdiet suscipit.
              </p>
              <div className="live-link">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noReferrer">
                    Live Link
                  </a>
                ) : (
                  <a
                    style={{
                      textDecoration: "line-through",
                      cursor: "default",
                      color: "grey",
                    }}
                    href="{project.link}"
                    target=""
                    rel="noReferrer"
                  >
                    Live Link
                  </a>
                )}

                <a href={project.github} target="_blank" rel="noReferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}


export default Projects;
