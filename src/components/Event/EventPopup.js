import React from "react";
import './EventPopup.css';
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";

import 'moment-timezone';

const EventPopup = () =>{
    const [popup,setPopup] = useState(false);
    
    
   
    const handleClickOpen = () => {
        setPopup(!popup);
    }
    const closePopup = () => {
        setPopup(false)
    }
    // const saveHandle = () =>{
    //     setPopup(false)
    // }
    // const cancleHandle = () => {
    //     setPopup(false)
    // }
    
    
    
    return(
    <div>
        <button className="pls-btn"
        onClick={handleClickOpen}><span className="span-button">+</span></button>
        <div>
        {popup?
           
                <div className="pop-up-cnt">
                    <div className="pop-hea-der">
                        <h1 className="holy-heading">Add Holiday</h1>
                        <h1 className="cross-mark" onClick={closePopup}>X</h1>
                    </div>
                <div>
                        <div className="fst-rw">
                            <label className="label-class">Event</label> <br/>
                            <input type='text'/>
                        </div>
                        <div>
                            <label className="label-class">Event Group</label> <br/>
                            <input type='text'/>
                        </div>
                        <div>
                            <label className="label-class">Event Location</label> <br/>
                            <input type='text'/>
                        </div>     
                </div>
                <div className="button-container">
                
                </div>
            
        </div>:""}
    </div>
</div>
)
}
export default EventPopup;



/* <div className="form-container">
                        <div className="input-container">
                            <label className="lable-head">Holiday</label> <br/>
                            
        
                            <label className="lable-head">Holiday Group</label> <br/>
                           
                        
                            <label className="lable-head">Date</label> <br/>
                            
                        
                        </div>
                    <div className="input-container">
                <input type='text' className="input-para"/>
            <input type='text'/>
        <input type='date'/>
    </div>
                            <label className="lable-head">Description:</label>
                            <textarea id="holidayGroup" name="holidayGroup" rows="4" cols="24"></textarea>
                      
 </div> */