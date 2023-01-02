import Address from "./Components/Address"
import Projects from "./Components/Projects"
import {resumeData,projectData} from "../src/resumeData"
import ResumeContent from "./Components/ResumeContent";
console.log(resumeData, projectData)
projectData.map((data)=>console.log(data))

function App() {
  
  return (
    <div id="resume">
      <h1 id="name">Gerardo Rapeta</h1>
      <p id="nickname">"Geo" Rapeta</p>

      <Address />

      {resumeData.map((resumeData)=> <ResumeContent 
      key={resumeData.id} 
      header={resumeData.header} 
      school={resumeData.school}
      paragraphs={resumeData.paragraphs}
      />)}
      <Projects projectData={projectData}/>
    </div>
  )
}

export default App;
