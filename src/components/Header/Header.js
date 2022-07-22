import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Sidebar from "./Sidebar/Sidebar";
import Toolbar from "./Toolbar/Toolbar";
import Backdrop from './Backdrop/Backdrop';
import Profile from "../Profile/Profile";


const Header = () => {

  const[sidebar, setSidebar] = useState(false)

  const toggleSidebar = () =>{
    setSidebar((prevState) => !prevState)
  }

  return (
    // try shortening code using map
    <div className="dashboard-nav-bg-container">
      <nav className="dashboard-nav-container">
        <div>
          <img
            alt="db nav logo"
            className="db-nav-logo"
            src="http://192.168.0.116:8080/css/images/logo.png"
          />
        </div>
        <div className="nav-log-out-container">
          <p className="header-profile-log-reset-button">
            <Profile/>
          </p>
          <div>
        <ul className="db-nav-ul-list-container">
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/kidstatus"
            >
              Kid Status
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/eventmanagement"
            >
              Event Management
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/holidaymanagement"
            >
              Holiday Management
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/kidmarks"
            >
              Kid Marks
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/attendence"
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/diary"
            >
              Diary
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/kidapprovals"
            >
              Kid Approvals
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/aboutme"
            >
              About Me
            </Link>
          </li>
        </ul>
        </div>
      </div>
      </nav>
      <div className="nav-bar-mobile-side-view">
      <Toolbar openSidebar={toggleSidebar} />
      <Sidebar Sidebar={sidebar}/>
      <Backdrop Sidebar={sidebar} closeSidebar={toggleSidebar}/>
    </div>
    </div>
  );
};

export default Header;