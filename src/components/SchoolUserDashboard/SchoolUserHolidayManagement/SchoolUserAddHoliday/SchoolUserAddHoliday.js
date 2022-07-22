import React from "react";
import { useState } from 'react';
import './SchoolUserAddHoliday.css';

const SchoolUserAddHoliday = () => {
    const [popup, setPopup] = useState(false);
    const handleClickOpen = () => {
        setPopup(!popup);
    }
    const closePopup = () => {
        setPopup(false)
    }
    const saveHandle = () => {
        setPopup(false)
    }
    const cancleHandle = () => {
        setPopup(false)
    }
    return (
        <div>
            <button className="plus-button"
                onClick={handleClickOpen}><span className="span-button">+</span></button>
            <div>
                {popup ?
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
                                        <input type='text' className="input-para" />
                                    </div>

                                </p>
                                <p className="input-container">
                                    <div className="add-holiday-label-headings">
                                        <label className="lable-head">Holiday Group</label>
                                    </div>
                                    <div className="add-holiday-input-subans">
                                        <input type='text' />
                                    </div>
                                </p>
                                <p className="input-container">
                                    <div className="add-holiday-label-headings">
                                        <label className="lable-head">Date</label>
                                    </div>
                                    <div className="add-holiday-input-subans">
                                        <input type='date' className="add-holiday-date-input"/>
                                    </div>

                                </p>
                                <p className="input-container">
                                    <div className="add-holiday-label-headings">
                                        <label className="lable-head">Description:</label>
                                    </div>
                                    <div className="add-holiday-input-subans">
                                        <textarea className="add-holiday-input-subans text-area-width"
                                            id="holidayGroup" name="holidayGroup" rows="4" cols="300"></textarea>
                                    </div>

                                </p>
                            </div>
                            <div className="add-holiday-checkbox-container">
                                <input type="checkbox" />
                                <label className="lable-font-size-color">
                                    Notify
                                </label>
                            </div>
                            <div className="add-holiday-save-cancle-button-container">
                                <button type="submit" className="btn-form" onClick={saveHandle}>Save</button>
                                <button type="submit" className="btn-form" onClick={cancleHandle}>Cancel</button>
                            </div>
                        </div>
                    </div> : ""}
            </div>
        </div>
    )
}
export default SchoolUserAddHoliday;