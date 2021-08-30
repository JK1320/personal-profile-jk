import React, {useState, useEffect} from "react";



function Projects({projectsData}) {
  const data = projectsData;
  const [current, setCurrent] = useState(0);
  const [project, setProject] = useState(data[current])

    useEffect(
    () => setProject(data[current]), 
    [current, project, data]
  )
  
  const nextProject = () => {
    current === data.length-1 ?
      setCurrent(0)
    :
      setCurrent(current + 1)
  }
  
  const prevProject = () => {
    current === 0 ?
      setCurrent(data.length-1)
    :
      setCurrent(current - 1)
  }
  
  const dotPicksProject = (e) => setCurrent(Number(e.target.id))
  
function Slide({ project }) {
  return (
    <div className="mySlides">
      {/* <h4>{project.project}</h4> */}
      <img className="image" src={project.image} alt="projects" />
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noReferrer">
          Live
        </a>
        <a href={project.github} target="_blank" rel="noReferrer">
          Github
        </a>
      </div>
    </div>
  );
}

function Arrows({ nextProject, prevProject }) {
  return (
    <>
      <a href="#prev" onClick={prevProject} className="prev" id="prev">
        &#10094;
      </a>
      <a href="#prev" onClick={nextProject} className="next" id="next">
        &#10095;
      </a>
    </>
  );
}

function Dots({ dotQty, current, dotPicksProject }) {
  return (
    <div className="dot-container">
      {dotQty.map((dot, i) => {
        return (
          <span
            id={i}
            className={current === i ? "dot active" : "dot"}
            onClick={dotPicksProject}
          ></span>
        );
      })}
    </div>
  );
}


  return (
    <div className="projects">
 
      <div className="slideshow-container">
        <Slide project={project} />
        <Arrows nextProject={nextProject}
                prevProject={prevProject} />
      </div>
      <Dots dotQty={data} 
            current={current}
            dotPicksProject={dotPicksProject} />

     
      {/* {projectsData.map((project, index) => 
      (
          <div className="cards" key={index}>
                <h4>{project.project}</h4>
                <img className="image" src={project.image} alt="projects" />
          </div>
      ))} */}
      
    </div>
  );
}


export default Projects;
