import React from "react";
import { Link } from "react-router-dom";
import "./AdminSchoolDashboardNav.css";

const AdminSchoolDashboardNav = () => {
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
        <ul className="db-nav-ul-list-container">
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/adminDashboard/adminSchools"
            >
              Schools
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none me-3 db-nav-link-item"
              to="/adminDashboard/adminSchoolApprovals"
            >
              School Approvals
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSchoolDashboardNav;