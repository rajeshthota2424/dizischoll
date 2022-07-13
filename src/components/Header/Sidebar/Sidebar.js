import React from "react";

import './Sidebar.css'

const Sidebar = ({Sidebar}) => {
    return ( 
        <div className={Sidebar? "sidebar sidebar-open":"sidebar"}>
        <ul>
          <li>
            <a href="/dashboard">
              <span> Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/kidStatus">
              <span> Kid Status</span>
            </a>
          </li>
          <li>
            <a href="/eventManagement">
              <span> Event Management</span>
            </a>
          </li>
          <li>
            <a href="/HolidayManagement">
              <span> Holiday Management</span>
            </a>
          </li>
          <li>
            <a href="/kidMarks">
              <span className="span-container"> KidMarks</span>
            </a>
          </li>
          <li>
            <a href="/Attendence">
              <span> Attendance</span>
            </a>
          </li>
          <li>
            <a href="/Dairy">
              <span> Diary</span>
            </a>
          </li>
          <li>
            <a href="/kidApprovals">
              <span> Kid Approvals</span>
            </a>
          </li>
          <li>
            <a href="/aboutMe">
              <span> About Me</span>
            </a>
          </li>
        </ul>

        </div>
     );
}
 
export default Sidebar;