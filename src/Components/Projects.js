import React from "react";

function Projects({projectData}){
    // projectData.map((data)=>console.log(data))
return(
    <div >
        <h3 className="projects">Projects</h3>
        {projectData.map((projectData)=><a href={projectData.link} key={projectData.name}>{projectData.name}</a>)}
    </div>
)
}
export default Projects