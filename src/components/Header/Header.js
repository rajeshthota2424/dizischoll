import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className='nav-bg-container'>
      <nav>
      <div>
        <img src='http://192.168.0.116:8080/css/images/logo.png'
        alt='header logo'
        className='header-img' />
      </div>
        <ul className="ul-container">
          <li className="li-container selected">
            <a href="/dashboard" className="anchor-container">
              <span className="span-container"> Dashboard</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/kidStatus" className="anchor-container">
              <span className="span-container"> Kid Status</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="eventManagement" className="anchor-container">
              <span className="span-container"> Event Management</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="HolidayManagement" className="anchor-container">
              <span className="span-container"> Holiday Management</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/kidMarks" className="anchor-container">
              <span className="span-container"> KidMarks</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/Attendence" className="anchor-container">
              <span className="span-container"> Attendance</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/Dairy" className="anchor-container">
              <span className="span-container"> Diary</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/kidApprovals" className="anchor-container">
              <span className="span-container"> Kid Approvals</span>
            </a>
          </li>
          <li className="li-container default">
            <a href="/aboutMe" className="anchor-container">
              <span className="span-container"> About Me</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header