import React from "react";



function Projects({projectsData}) {
// let projects = ["Baby Names", "Countries", "JobsListing"]
// console.log(projectsData.image)
  return (
    <div className="projects">
     
      {projectsData.map((project, index) => 
      (
          <div className="cards" key={index}>
                <h3>{project.project}</h3>
                <img className="image" src={project.image} alt="" />
          </div>
      ))}
      
    </div>
  );
}

export default Projects;
