// import React from 'react';
// import Popup from 'reactjs-popup'
// import { useState } from "react";
// import './AddHoliday.css'
// import 'reactjs-popup/dist/index.css'

// const AddHoliday = () => {
//     const [holidayName, setHolidayName] = useState("");

//     const onUserInputChange = (event) => {
//         setHolidayName(event.target.value);
//       };

//       const letMeInHandler = async (event) => {
//         event.preventDefault();
//       }
// console.log(holidayName)

//     return (
// <div>
// <div >
// <Popup

// modal
// trigger={
// <button type="button" className="add-popup-button" >
// <span className='add-span'>+</span>
// </button>}>
// {close => (
//   <>
//   <div className='trash-container holiday-container'>
//   <div className='trash-heading-container'>
//     <h1 className='trash-popup-heading'>Add Holiday</h1>
//     <button type="button" className="close " onClick={() => close()} aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//     <p className='trash-para'>Are you sure you want to Delete The selected Event?</p>
//     <div className="trash-button">
//     <button
//     type="button"
//     className="trigger-button"
//     onClick={() => close()}>
//       Save
//     </button>
//   <button
//     type="button"
//     className="trigger-button "
//     onClick={() => close()}>
//       Cancle
//     </button>
//     </div>
//   </div>
//   </>)}
// </Popup>
// </div>
// </div>

// )
// }

// export default AddHoliday;


import React from "react";
import './AddHoliday.css';
import { useState } from 'react';


const AddHoliday = () =>{
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
                <div className="add-holiday-popup-container">
                <div className="pop-header">
                    <h1 className="holy-head">Add Holiday</h1>
                    <h1 className="cross" onClick={closePopup}>X</h1>
                </div>
                    <div className="form-container">
                        <p className="input-container">
                        <div className="add-holiday-label-headings">
                            <label className="lable-head">Holiday</label>
                        </div>  
                        <div className="add-holiday-input-subans">
                            <input type='text' className="input-para"/>
                        </div>  
                            
                        </p>
                        <p className="input-container">
                        <div className="add-holiday-label-headings">
                            <label className="lable-head">Holiday Group</label>
                        </div>
                        <div className="add-holiday-input-subans">
                            <input type='text'/>
                        </div>
                        </p>
                        <p className="input-container">
                        <div className="add-holiday-label-headings">
                            <label className="lable-head">Date</label>
                        </div>
                        <div className="add-holiday-input-subans">
                            <input type='date'/>
                        </div>
                            
                        </p>
                        <p className="input-container">
                        <div className="add-holiday-label-headings">
                            <label className="lable-head">Description:</label>
                        </div>
                        <div className="add-holiday-input-subans">
                            <textarea className="add-holiday-input-subans"
                            id="holidayGroup" name="holidayGroup" rows="4" cols="24"></textarea>
                        </div>
                            
                        </p>
                    </div>
                    <div className="add-holiday-checkbox-container">
                                        <input type="checkbox" />
                                        <label className="lable-font-size-color">
                                          Notify
                                        </label>
                                      </div>
                    <div className="button-container">
                        <button type="submit" className="btn-form" onClick={saveHandle}>Save</button>
                        <button type="submit" className="btn-form" onClick={cancleHandle}>Cancle</button>
                    </div>
                </div>
            </div>:""}
        </div>
    </div>
    )
}
export default AddHoliday;