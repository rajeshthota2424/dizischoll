import React from "react";
import './Toolbar.css';
import { RiMenuFill } from "react-icons/ri";
const Toolbar = ({openSidebar}) => {
    return ( 
        <div className="tool-bar">
            <div className="burger" onClick={openSidebar}>
                <span><RiMenuFill/></span>
            </div>
        </div>
     );
}
 
export default Toolbar;