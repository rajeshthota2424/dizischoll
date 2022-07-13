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
import KidApprovals from "./components/KidApprovals/KidApprovals";

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
          <Route exact path= '/Dairy' element = {<Diary />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import TextMove from "./components/Event/TextMove";
// import DisbleDate from './components/Event/DisbleDate';




// const App = () => {
// return(
//   <div>
//     <DisbleDate />
//   </div>
// )
// }

// export default App;

// import React from "react";
// import './App.css'
// import PopUp from "./components/Screens/PopUp/PopUp";

// const App = () => {
//   return ( 
//     <div>
//       <PopUp />
//     </div>
//    );
// }
 
// export default App;

// import React from "react";
// import './App.css';
// import TextMove from './components/Event/TextMove'





// const App = () => {
//   return (
//     <div>
//       <TextMove />
//     </div>
//   )
// }

// export default App;

// import React, {useState} from "react";
// import Backdrop from "./components/Header/Backdrop/Backdrop";
// import Sidebar from "./components/Header/Sidebar/Sidebar";
// import Toolbar from "./components/Header/Toolbar/Toolbar";

// const App = () => {

//   const[sidebar, setSidebar] = useState(false)

//   const toggleSidebar = () =>{
//     setSidebar((prevState) => !prevState)
//   }
//   return ( 
//     <div>
//       <Toolbar openSidebar={toggleSidebar} />
//       <Sidebar Sidebar={sidebar}/>
//       <Backdrop Sidebar={sidebar} closeSidebar={toggleSidebar}/>
//     </div>
//    );
// }
 
// export default App;