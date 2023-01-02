import React from "react";

function ResumeContent({header, school, paragraphs}){
    console.log(paragraphs)
    return(
        <div id={header} >
            <h3 className="header">{header}</h3>
            {school ? <><h5>{school} </h5> <p>September 2022-PRESENT</p></> : null}
            {paragraphs ? paragraphs.map((paragraph)=>{return <div class="content"><p>{paragraph}</p></div>}) : null}

        </div>
    )
}

export default ResumeContent