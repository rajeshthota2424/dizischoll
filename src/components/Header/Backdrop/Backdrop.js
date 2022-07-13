import React from "react";
import './Backdrop.css';


const Backdrop = ({Sidebar, closeSidebar}) => {
    return ( 
        <div className={Sidebar? "backdrop backdrop-open":"backdrop"} onClick={closeSidebar}>

        </div>
     );
}
 
export default Backdrop
