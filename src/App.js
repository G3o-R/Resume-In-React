import Address from "./Components/Address"
// import Experience from "./Components/Experience"
// import Education from "./Components/Education"
// import Skills from "./Components/Skills"
// import Objective from "./Components/Objective"
// import ResumeContent from "./Components/ResumeContent"
import resumeData from "../src/resumeData"
import ResumeContent from "./Components/ResumeContent";

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
      {/* <Experience />
      <Education />
      <Skills />
      <Objective /> 
      <Projects /> */}
    </div>
  )
}

export default App;
