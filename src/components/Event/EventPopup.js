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
    const saveHandle = () =>{
        setPopup(false)
    }
    const cancleHandle = () => {
        setPopup(false)
    }
    
    
    
    return(
    <div>
        <button className="plus-button"
        onClick={handleClickOpen}><span className="span-button">+</span></button>
        <div>
        {popup?
            <div>
                <div className="popup">
                <div className="pop-header">
                    <h1 className="holy-head">Add Holiday</h1>
                    <h1 className="cross" onClick={closePopup}>X</h1>
                </div>
                <div>
                <div className="jdn">
                    <div className="first-row">
                        <div className="br-container">
                            <label>Event</label> 
                            <input type='text'/>
                        </div>
                    <div className="first-row">
                        <div className="br-container">
                            <label>Event</label> 
                            <input type='text'/>
                        </div>
                    </div>
                </div>    
                 {/* <div>
                    <label className="lable-heading">Holiday</label> <br/>
                    <input type='text' />
                </div>
                <div>
                    <label className="lable-heading">Event Group</label> <br/>
                    <input type='text' />
                </div>    
                <div>
                    <label className="lable-heading">Event Location</label> <br/>
                    <input type='text' />
                </div>*/}
                </div>
                  
                </div>
                <div className="button-container">
                    {/* <button type="submit" className="btn-form" onClick={saveHandle}>Save</button>
                    <button type="submit" className="btn-form" onClick={cancleHandle}>Cancle</button> */}
                </div>
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