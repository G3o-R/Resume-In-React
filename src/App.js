import Address from "./Components/Address"
import Projects from "./Components/Projects"
import {resumeData,projectData} from "../src/resumeData"
import ResumeContent from "./Components/ResumeContent";
console.log(resumeData, projectData)


function App() {
  
  return (
    <div className="resume">
      <div className="top">
      <div className ="name">
      <h1 id="full-name">Gerardo Rapeta</h1>
      <p id="nickname">"Geo" Rapeta</p>
    </div>
    
      <Address />
      </div>
      <div className="content">
      {resumeData.map((resumeData)=> <ResumeContent 
      key={resumeData.id} 
      header={resumeData.header} 
      school={resumeData.school}
      paragraphs={resumeData.paragraphs}
      />)}
      <Projects projectData={projectData}/>
      </div>
    </div>
  )
}

export default App;
