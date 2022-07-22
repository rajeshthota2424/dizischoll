import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import './SchoolUserKidApprovals.css'


const SchoolUserKidApprovals = () => {
  let loginToken = Cookies.get("loginToken");
  const [SchoolApprovalsStatusArray, setSchoolApprovalsStatusArray] = useState([]);
  const [approvalState, setApprovalState] = useState('');
  const [rejectState, setRejectState] = useState('');


  useEffect(() => {
    const getSchoolApprovalDetailes = async () => {
      const getSchoolApprovalStatus =
        "http://192.168.0.116:8280/mas_kidStatus/1.0/get_pending_kid_Status?mas_userId=schooluser1@gmail.com&mas_requestedOn=2022-7-21%2011:46:11&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/103.0.0.0%20Safari/537.36&mas_guId=82fc9849-65dd-89d4-457f-483884b41e23&mas_geoLocation=anonymous&limit=10&offset=0&totalResults=true";
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
    setApprovalState('Please Select Atleast One Kid to Approve')
    const timer = setTimeout(() =>
      setApprovalState(''), 3000)
  }
  const rejectButton = () => {
    setRejectState('Please Select Atlest One Kid to Reject')
    const timer = setTimeout(() =>
      setRejectState(''), 3000)
  }



  return (
    <div>
      <div className="school-approval-container-bg-color">
        <p className="school-user-approval-name">{approvalState}</p>
        <p className="school-user-approval-name">{rejectState}</p>
        <div className="school-approval-buttons-container">

          <button className="school-approval-trigger-button" onClick={approvalButton}>APPROVE</button>
          <button className="school-approval-trigger-button" onClick={rejectButton}> REJECT</button>
          <button className="school-approval-trigger-button">RESET</button>
        </div>
        <div>
          <hr className="horizontal-school-approval" />
          <div className="school-approval-data">
            <div className="table-inner-border">
            <table className="table table-bordered">

              <thead style={{ width: "95%", overflow: "auto" }}>
                <tr className='holiday-management-table-head'>
                  <th className='holiday-management-table-heading-hover'>Select</th>
                  <th className='holiday-management-table-heading-hover'>Kid ID</th>
                  <th className='holiday-management-table-heading-hover'>First Name</th>
                  <th className='holiday-management-table-heading-hover'>Last Name ID</th>
                  <th className='holiday-management-table-heading-hover'>Createrd ON</th>
                  <th className='holiday-management-table-heading-hover'>Kid Status </th>
                  <th className='holiday-management-table-heading-hover'>Roll No</th>
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

export default SchoolUserKidApprovals;