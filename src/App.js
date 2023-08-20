import React, { useState } from 'react';
import './App.css';
import MainNote from './MainNote';
import CreateNote from './CreateNote';
import Dropdown  from './Dropdown';

const App=()=>{
    const [listItems,setListitems]=useState([]);
    const [showMenu,setShowMenu]=useState(false);
    const [isDark,setDark]=useState(false);
    const[display,setDisplay]=useState(false);
    const AddNoteFunction=(userNote)=>{
       
       setListitems((oldListItems)=>{
        return[...oldListItems,userNote];
       })
    
       console.log(listItems);
    };

    const deleteUserNote=(index)=>{
        
        setListitems(()=>{
            return listItems.filter((arrElem,id)=>{
                return id!==index;
            })
        })
        
    };

    const showDropdown=()=>{
        if(showMenu===false)
        setShowMenu(true);
        else 
        setShowMenu(false);
    }
    

    const changeSettings=(setting)=>{
      //  console.log(setting);
        if(setting==="darkMode"){
            if(isDark===false) setDark(true);
            else setDark(false);
        }
         if(setting==="ChangeDisplay"){
            if(display===false) setDisplay(true);
            else setDisplay(false);
         }; 

    }
    console.log(display);
    
    const HeaderDark={
        backgroundImage:"linear-gradient(to right,black,grey)"

    }

    const backgroundAppColor={
        backgroundColor:"black"
    }

    const MainNoteDark={
        backgroundColor:"white",
        color:"yellow"
    }
 
    const dropdownBtnCss={
        backgroundColor:"white",
        width:"fit-content",
        height:"fit-content",
        borderRadius:"50%"
    }

    const year=new Date().getFullYear;
    return(
        <React.Fragment>
        <div className='main-app-content' style={isDark?backgroundAppColor:null}>
        <header className='header' style={isDark?HeaderDark:null}>
        <img src='clone.jpg' alt='keep-logo' id='logoIcon'></img>
        <h1>Keep-Note</h1> 
        <i class='bx bxs-cloud-download bx-tada' id="dropdown-btn" style={isDark?dropdownBtnCss:null} onClick={showDropdown}></i>
     </header>
     <Dropdown displaysetting={showMenu} onSelect={changeSettings}/>


     <div className='Main-note' style={isDark?MainNoteDark:null}>
         <MainNote onSelect={AddNoteFunction}/>
     </div>

     <div className='note-section'>
          <div className='create-note' style={isDark?backgroundAppColor:null} >
             {listItems.map((userNoteItem,ind)=>{
                 return(
                     <CreateNote 
                     title={userNoteItem.title} 
                     content={userNoteItem.content} 
                     key={ind} 
                     index={ind} 
                     onSelect={deleteUserNote} 
                     darkProp={isDark}
                     displayProp={display}/>
                     
                 )
             })}
            
         </div>
     </div>
        </div>

        <footer className='footer'>
        <p>Made By:Aditya Dadhich</p>
        </footer>
            
           
        
        </React.Fragment>
    )
}
export default App;