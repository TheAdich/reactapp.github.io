import React from "react";

const CreateNote=(props)=>{
    const deleteBtn=()=>{
        props.onSelect(props.index);
      
    }

    const NoteContentDark={
        backgroundColor:"white"
    }

    const changeDisplay={
        width:"90%",
        margin:"15px auto",
        position:"relative"
    }

    const CrossIconPos={
        position:"absolute",
        top:"2px",
        left:"95%",
        display:"inline-block",
        fontSize:"1.5em",
        backgroundColor:"white"

    }

   
    return(
        <React.Fragment>
            <div className="note-content" style={props.darkProp?NoteContentDark:null||props.displayProp?changeDisplay:null}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <i class='bx bx-x bx-tada-hover' id="crossIcon" 
            onClick={deleteBtn} 
            style={props.darkProp?null:(props.displayProp?CrossIconPos:null)} 
             ></i>
            </div>
            
        
        </React.Fragment>
    )
}
export default CreateNote;