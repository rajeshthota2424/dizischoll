import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import './AdminSchoolApprovals.css'


const AdminSchoolApprovals = () => {
  let loginToken = Cookies.get("loginToken");
  const [SchoolApprovalsStatusArray, setSchoolApprovalsStatusArray] = useState([]);
  const [approvalState, setApprovalState] = useState('');
  const [rejectState, setRejectState] = useState('');


  useEffect(() => {
    const getSchoolApprovalDetailes = async () => {
      const getSchoolApprovalStatus =
        "http://192.168.0.116:8280/mas_GetRequestsandProcess/1.0/RequestedSchool_details?mas_guId=2b9920ba-30d9-f7ff-7663-233fc5fd0f5c&mas_requestedOn=2022-7-20%2012:25:3&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/103.0.0.0%20Safari/537.36&mas_geoLocation=anonymous&mas_userref=undefined&limit=10&offset=0&totalResults=true";
      let options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(getSchoolApprovalStatus, options);
      const schoolStatusData = await response.json();
      console.log(schoolStatusData)
      setSchoolApprovalsStatusArray(schoolStatusData);

    };
    getSchoolApprovalDetailes();
  }, []);


  const approvalButton = () => {
    setApprovalState('Please Select any One School to Accept')
    const timer = setTimeout(() =>
      setApprovalState(''), 3000)
  }
  const rejectButton = () => {
    setRejectState('Please Select any One School to Reject')
    const timer = setTimeout(() =>
      setRejectState(''), 3000)
  }



  return (
    <div>
      <div className="school-approval-container-bg-color">
        <p className="school-approval-name">{approvalState}</p>
        <p className="school-approval-name">{rejectState}</p>
        <div className="school-approval-buttons-container">

          <button className="school-approval-trigger-button" onClick={approvalButton}>APPROVE</button>
          <button className="school-approval-trigger-button" onClick={rejectButton}> REJECT</button>
          <button className="school-approval-trigger-button">RESETDATA</button>
        </div>
        <div>
          <hr className="horizontal-school-approval" />
          <div className="school-approval-data">
            <div className="table-inner-border">
            <table className="table table-bordered">

              <thead style={{ width: "95%", overflow: "auto" }}>
                <tr className='holiday-management-table-head'>
                  <th className='holiday-management-table-heading-hover'>Select</th>
                  <th className='holiday-management-table-heading-hover'>School Name</th>
                  <th className='holiday-management-table-heading-hover'>First Name</th>
                  <th className='holiday-management-table-heading-hover'>Email ID</th>
                  <th className='holiday-management-table-heading-hover'>Requested ON</th>
                  <th className='holiday-management-table-heading-hover'>Phone</th>
                  <th className='holiday-management-table-heading-hover'>Status </th>
                  <th className='holiday-management-table-heading-hover'>Address</th>
                </tr>
              </thead>


            </table>
           
            <div className="school-approval-data-para">
            <h1 className="school-approval-para">No data to display.</h1>
          </div>
                
            </div>
          </div>

        </div>
        <div className="school-approval-page-container">
          <p >Page 1 (0 of at least 0 items)</p>

          <hr className="school-approval-line" />
        </div>
      </div>
    </div>
  );
};

export default AdminSchoolApprovals;