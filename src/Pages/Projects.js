import React from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import projectsData from "../data/projectsData";


function Projects() {

  return (
    <div>
      {/* <Header /> */}
      <div className="projects">
        {projectsData.map((project, index) => (
          <div key={index} className="projects-main">
            <div className="project-img-box">
              <img src={project.image} alt="project information" />
            </div>
            <div className="project-info">
              <h2>{project.project}</h2>
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
                    style={{ textDecoration: "line-through", cursor: "default", color: "grey"}}
                    href="{project.link}"
                    target=""
                    rel="noReferrer"
                  >
                    Live Link
                  </a>
                )}

                <a href={project.github} target="_blank" rel="noReferrer">
                  github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}


export default Projects;
