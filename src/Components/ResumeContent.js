import React from "react";

function ResumeContent({header, school, paragraphs}){
    return(
        <div id={header}>
            <h3 className="header">{header}</h3>
            {school ? <><h2 >{school} </h2> <p className="school">September 2022-PRESENT</p></> : null}
            {paragraphs ? paragraphs.map((paragraph)=>{return <div className="paragraph-content" key={paragraph}><p>{paragraph}</p></div>}) : null}

        </div>
    )
}

export default ResumeContent