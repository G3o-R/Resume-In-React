import React from "react";

function Projects({projectData}){
    // projectData.map((data)=>console.log(data))
return(
    <div id="Projects">
        <h3 className="header">Projects</h3>
        {projectData.map((projectData)=>{
        return (<>
        <h2>{projectData.name}</h2>
        <a href={projectData.link} key={projectData.name}>{projectData.name}</a>
        </>
        )})}
    </div>
)
}
export default Projects