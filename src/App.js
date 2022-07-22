import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import DashboardHome from "./components/DashboardHome/DashboardHome";
import TextMove from "./components/Event/TextMove";
import Holiday from "./components/Holiday/Holiday";
import AboutMe from "./components/AboutMe/AboutMe";
import Diary from "./components/Diary/Diary";
import './App.css'
import KidMarks from "./components/KidMarks/KidMarks";
import KidsStatus from "./components/KidsStatus/KidStatus";
import KidApprovals from "./components/KidApprovals/KidApprovals";
import AdminSchoolDashboard from "./components/AdminDashboard/AdminSchoolDashboard";
import Attendence from "./components/Attendence/Attendence";
import SchoolUserDashboard from "./components/SchoolUserDashboard/SchoolUserDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element ={<Login />} />
          <Route exact path='/dashboard' element={<DashboardHome/>} />
          <Route exact path='/eventManagement' element = {<TextMove/>} />
          <Route exact path = '/HolidayManagement' element = {<Holiday/>} />
          <Route exact path= '/aboutMe' element = {<AboutMe/>} />
          <Route exact path= '/kidMarks' element = {<KidMarks />} />
          <Route exact path='/kidApprovals' element = {<KidApprovals />} />
          <Route exact path='/kidStatus' element = {<KidsStatus />} />
          <Route exact path= '/diary' element = {<Diary />} />
          <Route exact path='/attendence' element = {<Attendence />} />
          <Route exact path='/adminDashboard/*' element ={<AdminSchoolDashboard/>} />
          <Route exact path= '/schoolUserDashboard/*' element = {<SchoolUserDashboard />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;



// import React from "react";
// import SchoolApprovals from "./components/SchoolDetailes/SchoolApprovals/SchoolApprovals";

// const App = () => {
//   return (
//   <div>
//     <SchoolApprovals />
//   </div>
//   )
// }

// export default App;
