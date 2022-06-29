import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AllPages from "./components/DashboardPage/AllPages/AllPages";
import TextMove from "./components/Event/TextMove";
import Holiday from "./components/Holiday/Holiday";
import AboutMe from "./components/AboutMe/AboutMe";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element ={<Login />} />
          <Route exact path='/allPage' element={<AllPages/>} />
          <Route exact path='/eventManagement' element = {<TextMove/>} />
          <Route exact path = '/HolidayManagement' element = {<Holiday/>} />
          <Route exact path= '/aboutMe' element = {<AboutMe/>} />
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

// import AboutMe from './components/AboutMe/AboutMe';


// const App = () => {
//   return (
//     <div>
//       <AboutMe />
//     </div>
//   )
// }

// export default App;