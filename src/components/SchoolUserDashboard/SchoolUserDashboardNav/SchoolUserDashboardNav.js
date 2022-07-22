import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../Profile/Profile";
import "./SchoolUserDashboardNav.css";



const SchoolUserDashboardNav = () => {

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
              to="/schoolUserDashboard/schoolUserKidStatus"
            >
              Kid Status
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/schoolUserDashboard/schoolUserKidApproval"
            >
              Kid Approvals
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
              to="/schoolUserDashboard/schoolUserHolidayManagement"
            >
              Holiday Management
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/schoolUserDashboard/SchoolUserAddSubject"
            >
              Add Subject
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/schoolUserDashboard/schoolUserAboutMe"
            >
              About Me
            </Link>
          </li>
        </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default SchoolUserDashboardNav;