import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSchoolApprovals from "./AdminSchoolDetailes/AdminSchoolApprovals/AdminSchoolApprovals"
import AdminSchools from './AdminSchoolDetailes/AdminSchools/AdminSchools'
import ProtectedRouteForCt from "../RequiredAuthForCt/RequiredAuthForCt";
import "./AdminSchoolDashboard.css";
import AdminSchoolDashboardNav from "./AdminSchoolDashboardNav/AdminSchoolDashboardNav"
import HomeFooter from "../HomeFooter/HomeFooter";

const AdminSchoolDashboard = () => {
  return (
    <div className="dashboard-bg-container">
      <AdminSchoolDashboardNav />
      <Routes>
        
        {/*path ="/" to render the component on the same path "/dashboard" 
        this DashboardHome component will render on same path "/dashboard"*/}
        <Route path="/adminSchoolApprovals" element={<AdminSchoolApprovals />} />
        <Route path="/adminSchools" element={<AdminSchools />} />

        {/* 1. for nested routing,=> routing inside routing, 
              use /dashboard/* for path inside Browser router to support further routing
              to render descendant routes you need to use /* for parent Route
              
              for nested or descendANT ROUTES YOU NO NEED to use <brouserRouter>
              just use <Routes> and <Route/> components but parent of this must be in main <BrowserRouter/>
              
              2. for nested <Route path=/kidstatus
            3. for link <Link to=/dashboard/kidstatus
                 
                 */}
      </Routes>
     <HomeFooter />
    </div>
  );
};

export default AdminSchoolDashboard;