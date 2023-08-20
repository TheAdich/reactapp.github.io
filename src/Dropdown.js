import React from "react";

const Dropdown=(props)=>{
    const isDisplay=()=>{
      
        return props.displaysetting;
    }

    isDisplay();

   

    const dropdownHide={
            display:"none"
    }


    const dropdownShow={    
                position: "absolute",
                right:"0px",
                backgroundColor:"white",
               boxShadow: "-4px 5px 4px rgb(208, 208, 208)",
               zIndex:"100"
               
        }

    const setPropUser=(e)=>{
       
       return props.onSelect(e.target.parentElement.id);
    }

        return(
            <React.Fragment>
                <div className="dropdown-content" style={isDisplay()?dropdownShow:dropdownHide}>
                        <div id="darkMode"  onClick={setPropUser} >
                        <i class='bx bx-loader bx-spin'></i>
                        <p>Dark Mode</p>
                        </div>
                        <div id="ChangeDisplay"  onClick={setPropUser} >
                        <i class='bx bx-windows'></i>
                        <p>Change Display Mode</p>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
    
   

export default Dropdown;