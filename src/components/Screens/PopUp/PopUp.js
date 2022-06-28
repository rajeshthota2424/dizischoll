import React, {useState} from "react";
import './PopUp.css'
import { BsTrash } from 'react-icons/bs';



const PopUp = () => {
    const [popUp, setPopUp] = useState(false);
    const handleClickOpen = () => {
        setPopUp(!popUp);
    }
    const closePopup = () => {
        setPopUp(false)
    }
    
    return ( 
        <div>
            <button onClick={handleClickOpen} className='eye-button'><BsTrash /></button>
            <div >
            {popUp? 
                <div >
                    <div className="popup bg">
                        <div className="p-header">
                            <h1 className="p-head">
                                View Event
                            </h1>
                            <h1 className="p-para"
                            onClick={closePopup}>
                                X
                            </h1>
                        </div>
                        <div>
                            <p>Are you sure you want to Delete The selected Event?</p>
                        </div>
                        <div className="button-bg">
                    <button type="submit" onClick={closePopup} className='pop-button btn-1'>Yes</button>
                    <button type="submit" onClick={closePopup} className='pop-button btn-2'> No</button>
                    </div>
                    </div>
                    
                </div>: ""}
            </div>
        </div>
     );
}
 
export default PopUp;