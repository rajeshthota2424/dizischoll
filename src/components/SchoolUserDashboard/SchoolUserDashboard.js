import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolUserKidStatus from "./SchoolUserKidstatus/SchoolUserKidStatus";
import SchoolUserKidApprovals from "./SchoolUserKidApprovals/SchoolUserKidApprovals";
import SchoolUserDashboardNav from "./SchoolUserDashboardNav/SchoolUserDashboardNav";
import SchoolUserHolidayManagement from "./SchoolUserHolidayManagement/SchoolUserHolidayManagement";
import SchoolUserADDSubject from "./SchoolUserAddSubjects/SchoolUserAddSubject";
import SchoolUserAboutMe from "./SchoolUserAboutMe/SchoolUserAboutMe";
import HomeFooter from "../HomeFooter/HomeFooter";

const SchoolUserDashboard = () => {
  return (
    <div className="dashboard-bg-container">
      <SchoolUserDashboardNav />
      <Routes>
        
        {/*path ="/" to render the component on the same path "/dashboard" 
        this DashboardHome component will render on same path "/dashboard"*/}
        <Route path="/schoolUserKidStatus" element={<SchoolUserKidStatus />} />
        <Route path="/schoolUserKidApproval" element={<SchoolUserKidApprovals />} />
        <Route path="/schoolUserHolidayManagement" element={<SchoolUserHolidayManagement />} />
        <Route path="/SchoolUserAddSubject" element={<SchoolUserADDSubject />} />
        <Route path='/schoolUserAboutMe' element={<SchoolUserAboutMe />} />

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

export default SchoolUserDashboard;