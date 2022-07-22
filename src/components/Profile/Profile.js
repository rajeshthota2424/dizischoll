import React, {useState} from "react";
import './Profile.css';
import Cookies from "js-cookie";
import {FaSortDown} from "react-icons/fa";

const Profile = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };

    const onClickLogout = () => {
        const {history} = props;
        Cookies.remove("loginToken")
        history.replace('./login')
    };

    const onResetPassword = () => {
        const {history} = props;
        history.push('/resetPassword') 
    };
    
    return (
        <div>
            <div className="deslktop-profile-container">
                <button className="button-text" 
                onClick={toggleDropdown}>ct2@gmail.com <FaSortDown /> </button>
                {showDropdown && (
                <div className="drop-down-profile-container">
                    <p className="profile-log-out" onClick={onResetPassword}>
                        Reset Password
                    </p>
                    <p className="profile-log-out profile-log-out" onClick={onClickLogout}>
                        Sign Out
                    </p>
                    </div>
            )} 
            </div>
            <div className="profile-mobile-img-container">
                <button onClick={toggleDropdown}>
                    <img src="" className="profile-img" alt="profile img"/>
                </button>
            {showDropdown && (
                <div className="drop-down-profile-container">
                    <p className="profile-log-out" onClick={onResetPassword}>
                        Reset Password
                    </p>
                    <p className="profile-log-out profile-log-out" onClick={onClickLogout}>
                        Sign Out
                    </p>
                    </div>
            )}    
            </div>
        </div>
    )
};
export default Profile;
// import React from "react";
// import './Profile.css'
// import { Toolbar } from '@react-ui-org/react-ui';
// import { FaSortDown } from "react-icons/fa";

// const Profile = () => {
//     return (
//         <div>
//       <Toolbar className="toolbar">
//             <menubar>
//               <button className="toolbar-button" aria-haspopup="true">
//               <div className="toolbar-container">
              
//               <span data-bind="text: userLogin" class="button-text" id="ui-id-6">ct2@gmail.com</span>
//               <span className="icon"><FaSortDown icon="fa-solid fa-caret-down" /></span>
//               <select className="dropdown"  aria-hidden="true">
//                 <option id="about" value="about" data-bind="click: settings" class="oj-menu-item oj-complete" role="presentation">
//                 <a href="#resetPassword" id="ui-id-4" tabindex="-1" role="menuitem">Reset Password</a>
//                 </option>
//                 <option id="out" value="out" data-bind="click: logout" class="oj-menu-item oj-complete" role="presentation">
//                     <a href="#signOut" id="ui-id-5" tabindex="-1" role="menuitem">Sign Out</a>
//                 </option>
//               </select>
//               </div>
 
//               </button>
//             </menubar>
//           </Toolbar>
//         </div>  
//     )

// }
// export default Profile;