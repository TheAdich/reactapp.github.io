import React, { useState } from 'react';

const MainNote=(props)=>{
    const[isExpand,setExpand]=useState(false);
    

    const expandNote=()=>{
        setExpand(true);
    }
    const shrinkNote=()=>{
        setExpand(false);
    }

    const [userInput,setUserInput]=useState({title:"",content:""});
    const userData=(e)=>{
        //console.log(e.target.value);
        const {name,value}=e.target;

        
            setUserInput((oldData)=>{
               
                return{...oldData,
                    [name]:value
                }
            })
            

        console.log(userInput);
        
    }

    const addNoteUser=()=>{
        if(userInput.title==="") alert("Enter in the title content");
        else if(userInput.content==="") alert("Enter in the content box");
        else{
        props.onSelect(userInput);}
        setUserInput({title:"",content:""});
       
       
    }

    
    return(
        <React.Fragment>
            <input type='text' placeholder='Enter Title' onChange={userData} name="title" value={userInput.title} onClick={expandNote} onDoubleClick={shrinkNote}></input>
            {isExpand? <textarea rows="5" cols="5" placeholder='Write Something...' onChange={userData} name="content" value={userInput.content} onDoubleClick={shrinkNote}></textarea>:null}
           {isExpand? <i class='bx bxs-plus-circle bx-spin-hover' id='addIcon' onClick={addNoteUser} ></i>:null}
           
            
        </React.Fragment>
        

    )
}
export default MainNote;