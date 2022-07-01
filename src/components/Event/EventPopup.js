// import React from "react";
// import './EventPopup.css';
// import { useState } from 'react';

// import "react-datepicker/dist/react-datepicker.css";

// import 'moment-timezone';

// const EventPopup = () =>{
//     const [popup,setPopup] = useState(false);
    
    
   
//     const handleClickOpen = () => {
//         setPopup(!popup);
//     }
//     const closePopup = () => {
//         setPopup(false)
//     }
//     // const saveHandle = () =>{
//     //     setPopup(false)
//     // }
//     // const cancleHandle = () => {
//     //     setPopup(false)
//     // }
    
    
    
//     return(
//     <div>
//         <button className="pls-btn"
//         onClick={handleClickOpen}><span className="span-button">+</span></button>
//         <div>
//         {popup?
           
//                 <div className="pop-up-cnt">
//                     <div className="pop-hea-der">
//                         <h1 className="holy-heading">Add Holiday</h1>
//                         <h1 className="cross-mark" onClick={closePopup}>X</h1>
//                     </div>
//                 <div>
//                         <div className="fst-rw">
//                             <label className="label-class">Event</label> <br/>
//                             <input type='text'/>
//                         </div>
//                         <div>
//                             <label className="label-class">Event Group</label> <br/>
//                             <input type='text'/>
//                         </div>
//                         <div>
//                             <label className="label-class">Event Location</label> <br/>
//                             <input type='text'/>
//                         </div>     
//                 </div>
//                 <div className="button-container">
                
//                 </div>
            
//         </div>:""}
//     </div>
// </div>
// )
// }
// export default EventPopup;



//  <div className="form-container">
//                         <div className="input-container">
//                             <label className="lable-head">Holiday</label> <br/>
                            
        
//                             <label className="lable-head">Holiday Group</label> <br/>
                           
                        
//                             <label className="lable-head">Date</label> <br/>
                            
                        
//                         </div>
//                     <div className="input-container">
//                 <input type='text' className="input-para"/>
//             <input type='text'/>
//         <input type='date'/>
//     </div>
//                             <label className="lable-head">Description:</label>
//                             <textarea id="holidayGroup" name="holidayGroup" rows="4" cols="24"></textarea>
                      
//  </div> 


import React from "react";
import Popup from "reactjs-popup";
import './EventPopup.css';
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';



const EventPopup = () => {


    const [eventTo, setEventTo] = useState("All");
    const [showClass, setShowClass] = useState(false);
    const [showSection, setShowSection] = useState(false);
    const [saveEvent, setSaveEvent] = useState()
    // console.log(eventTo)
    // console.log(showClass)
    // console.log(showSection)
    const dropdownHandleEvent = (event) => {
        setEventTo(event.target.value)
        console.log(event.target.value)
        // if (event.target.value === "Class" ){
        //     setShowClss(true)
        // } 
        // else if (event.target.value === "Section") {
        //     setShowClss(true)
        //     setShowSection(true)
        // }
    }
    
    useEffect(() => {


        axios.get("http://192.168.0.116:8280/mas_KidClasses/1.0/getkidclass?Guid=11&mas_schoolUniqueId=5911355945&GeoLocation=anonymous&RequestedFrom=11&RequestedOn=11",
        {
            headers:{
                Accept: "application/json",
                Authorization: `Bearer 9a714947-f5b9-3732-aff3-c22884b5f34a`
            },
            data:"Guid=11&mas_schoolUniqueId=5911355945&GeoLocation=anonymous&RequestedFrom=11&RequestedOn=11",

        }
        ).then((res)=>{console.log(res.data.body);
        setShowClass(res.data.body)})
        .catch((err) => {
            console.log(err);
        })
    },[]);

    useEffect(() => {


        axios.get("http://192.168.0.116:8280/mas_KidSection/1.0/getkidSection?mas_schoolUniqueId=5911355945&mas_class=SECOND%20CLASS&Guid=aa&GeoLocation=aa&RequestedFrom=aa&RequestedOn=aa",
        {
            headers:{
                Accept: "application/json",
                Authorization: `Bearer 9a714947-f5b9-3732-aff3-c22884b5f34a`
            },
            data:"mas_schoolUniqueId=5911355945&mas_class=SECOND%20CLASS&Guid=aa&GeoLocation=aa&RequestedFrom=aa&RequestedOn=aa",

        }
        ).then((res)=>{console.log(res.data.body);
            setShowSection(res.data.body)})
        .catch((err) => {
            console.log(err);
        })
    },[]);

   

    const getDisplayEventTo=()=>{
        switch (eventTo){
            case "All":
                return null
            case "Class":
                return (<div>
                    <label className="lable-font-size-color">class</label> <br />
                    <select className="drop-down-add-event">
                        <option>-select class-</option>
                        {showClass.map((eachClass, index) =>
                            <option key={index}>{eachClass.mas_class}</option>
                        )};
                    </select>
                </div>)    
            case "Section":
                return (
                        (<>
                        <div>
                    <label className="lable-font-size-color">class</label> <br />
                    <select className="drop-down-add-event">
                        <option>-select class-</option>
                        {showClass.map((eachClass, index) =>
                            <option key={index}>{eachClass.mas_class}</option>
                        )};
                    </select>
                    </div>
                    <div>
                    <label className="lable-font-size-color">Section</label> <br />
                    <select className="drop-down-add-event">
                        <option>-select section-</option>
                        {showSection.map((eachSection, index) =>
                            <option key={index}>{eachSection.mas_section}</option>
                        )};
                        
                    </select>
                    </div> 
                </>)
                )  
             default:
                 
                
                
        }
    }
    
    console.log(getDisplayEventTo())
    

    return ( 
        <div>
            <div >
                        <Popup
                          modal
                          trigger={
                            <button
                              type="button"
                              className="add-event-span-plus-button"
                            >
                            <span className="add-event-span-button">+</span>
                            </button>
                          }
                        >
                          {(close) => {
                    const onsaveEventHandler = () => {
        close()
        axios.post(`http://192.168.0.116:8280/mas_EventManagement/1.0/mas_postEvent`,
        {
            headers: {
                "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer 001fe258-ad7b-3154-938e-b8974b8decca`,
            }
        }).then((res) => {
            console.log(res.data)
            setSaveEvent(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
                           return( <>
                              <div className="add-event-heading-container">
                                <div className="eye-heading-inner-container">
                                  <h1 className="eye-event-heading">
                                    View Event
                                  </h1>
                                  <button
                                    type="button"
                                    className="close eye-close-button"
                                    onClick={() => close()}
                                    aria-label="close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                            <div className="label-add-event-pop-up-container">
                                <div className="event-add-event-column-container">
                                <div className="add-event-width add-event-padding">
                                    <label className="lable-font-size-color">Event</label> <br />
                                    <input type='text' />
                                </div>
                                <div className="add-event-width add-event-padding">
                                    <label className="lable-font-size-color">Event Group</label> <br />
                                    <input type='text' />
                                </div>

                                <div className="add-event-width add-event-padding">
                                    <label className="lable-font-size-color">Event Location</label> <br />
                                    <input type='text' />
                                </div>
                                </div>
                                <div className="event-add-event-column-container">
                                <div className="add-event-width">
                                    <label className="lable-font-size-color">Event From Date</label> <br />
                                    <input type="datetime-local" />
                                </div>
                                <div className="add-event-width">
                                    <label className="lable-font-size-color">From To Date</label> <br />
                                    <input type="datetime-local"/>
                                </div>
                                {/* <div className="add-event-width">
                                    {/* <label className="lable-font-size-color" for='students'>Event</label> <br />
                                    <input type='text'/>  
                                </div> */}
                                
                                <div className="add-event-width">
                                    <label className="lable-font-size-color">Description</label> <br />
                                    <textarea type='text' rows='3' cols='22'
                                    />
                                </div>
                                </div>
                                <div className="event-add-event-column-container">
                                <div className="add-event-width">
                                    <label className="lable-font-size-color" for='students'>Event To</label> <br />
                                    <select name="students" id="students" className="drop-down-add-event"
                                    onChange={dropdownHandleEvent}>
                                        <option value="All">All</option>
                                        <option value="Class">Class</option>
                                        <option value="Section">Section</option>
                                        
                                    </select>
                                </div>
                                <div>
                                    {getDisplayEventTo()
                                    }
                                </div>
                                <div className="add-event-width">
                                <input type='checkbox' />
                                <label className="lable-font-size-color">Notify</label>
                                    {/* <label className="lable-font-size-color">Event</label> <br />
                                    <input type='text' /> */}
                                </div>
                                </div>
                                
                                </div>
                                <div>
                                  <button
                                    type="button"
                                    className="add-event-save-trigger-button"
                                    onClick={onsaveEventHandler}
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="button"
                                    className="add-event-cancle-trigger-button"
                                    onClick={() => close()}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                             {/* </div>
                            </div>  */}
                            </>
                          )}}
                        </Popup>
                      </div>
        </div>
     );
}
 
export default EventPopup;