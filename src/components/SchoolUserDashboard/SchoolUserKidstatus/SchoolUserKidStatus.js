import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import _ from "lodash";
import "./SchoolUserKidStatus.css";
import Cookies from "js-cookie";

const pageSize = 6;

const SchoolUserKidStatus = () => {
  const [posts, setPosts] = useState();
  const [statusKid, setStatusKid] = useState([]);
  const [buttonsDisable, setButtonsDisable] = useState(true);
  const [kidIdSelected, setkidIdSelected] = useState();
  const [updateStatus, setUpdateStatus] = useState();
  const [removeBox, setRemoveBox] = useState();
  const [paginatedPosts, setPaginatedPosts] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const [checkedKidIds, setCheckedKidIds] = useState([]);
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const [is_checked, set_is_checked] = useState(false);

  const onChangeCheckboxHandler = (event) => {
    set_is_checked(event.target.checked);

    if (event.target.checked) {
      disableButtons(false);
    } else {
      disableButtons(true);
    }
    set_is_checked("");
  };

  useEffect(() => {}, [checkedKidIds]);

  const loginToken = Cookies.get("loginToken");
  const loggedInUserProfile=JSON.parse(localStorage.getItem("diziUserProfile"))

  const buttons = buttonsDisable
    ? "kidstatus-trigger-button1"
    : "kidstatus-trigger-button";

  const selectedKidId = (id) => {
    setkidIdSelected(id);
  };

  useEffect(() => {
    const getKidStatus = () => {
        const getKidStatusUrl="http://192.168.0.116:8280/Mas_KIDS_Details/1.0/get_kid_Records"
        const getKidStatusParams=`?mas_userId=${loggedInUserProfile.mas_userId}&mas_requestedOn=2022-7-21%2011:8:12&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/103.0.0.0%20Safari/537.36&mas_guid=e078870b-5c6d-ad59-f18c-1f49150ae6d6&mas_geolocation=anonymous&limit=10&totalResults=true`
      axios
        .get(getKidStatusUrl+getKidStatusParams,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${loginToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setPosts(res.data.body);

          setPaginatedPosts(
            _(res.data.body)
              .slice(0)
              .take(pageSize)
              .value()
          );
        });
    };

    getKidStatus();
  }, [updateStatus]);

  //    updateStatus

  //    const column = [
  //    {heading:'Select', value :'checkbox'},
  //     {heading: 'Kid ID', value: 'mas_kidId'},
  //     {heading: 'First Name', value: 'mas_firstName'},
  //     {heading: 'Last Name', value: 'mas_lastName'},
  //     {heading: 'School Name', value: 'mas_schoolName'},
  //     {heading: 'Created On', value: 'mas_createdOn'},
  //     {heading: 'kid Status', value: 'mas_kidStatus'},

  //   ]

  const disableButtons = (showOrHide) => {
    setButtonsDisable(showOrHide);
    setRemoveBox(showOrHide);
  };

  const onResetButton = () => {
    setButtonsDisable(true);
    setRemoveBox(true);
  };

  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const page = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedPosts(paginatedPost);
  };

  return (
    <div>
      <div className="kidstatus-container ">
        <Popup
          modal
          trigger={
            <button type="button" className="activate-deactivate-buttons" disabled={buttonsDisable}>
              ACTIVATE
            </button>
          }
        >
          {(close) => {
            const updateStatus = (status) => {
              setButtonsDisable(true);
              setRemoveBox(true);
              close();
              fetch(
                "http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loginToken}`,
                  },
                  body: JSON.stringify({
                    header: {
                      guid: "a82e064e-bc21-3e5b-68dc-acfbc600f376",
                      requestedFrom:
                        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
                      geoLocation: "",
                    },
                    body: {
                      mas_kidId: [],
                      mas_kidStatus: status,
                    },
                  }),
                }
              )
                .then((data) => {
                  setUpdateStatus(data);
                })

                .catch((error) => {
                  console.error(error);
                });
            };

            return (
              <>
                <div className="kidstatus-kid-popup-container col-md-4">
                  <h1 className="kidStatus-heading">Change Status</h1>
                  <button
                    type="button"
                    className="kidstatus-close"
                    aria-label="Close"
                    onClick={close}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="kidstatus-para-container ">
                  <p className="kidstatus-kid-para">
                    Do You Really Want to Change Status..?
                  </p>

                  <div className="kidstatus-kid-button-container">
                    <button
                      type="button"
                      className="kidstatus-closing-button"
                      onClick={() => updateStatus("Active")}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      className="kidstatus-closing-button"
                      onClick={() => close()}
                    >
                      NO
                    </button>
                  </div>
                </div>
              </>
            );
          }}
        </Popup>

        <Popup
          modal
          trigger={
            <button type="button" className="activate-deactivate-buttons" disabled={buttonsDisable}>
              DEACTIVATE
            </button>
          }
        >
          {(close) => {
            const updateStatus = (status) => {
              setButtonsDisable(true);
              setRemoveBox(true);
              close();
              fetch(
                "http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loginToken}`,
                  },
                  body: JSON.stringify({
                    header: {
                      guid: "a82e064e-bc21-3e5b-68dc-acfbc600f376",
                      requestedFrom:
                        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
                      geoLocation: "",
                    },
                    body: {
                      mas_kidId: [""],
                      mas_kidStatus: status,
                    },
                  }),
                }
              )
                .then((data) => {
                  setUpdateStatus(data);
                })

                .catch((error) => {
                  console.error(error);
                });
            };

            return (
              <>
                <div className="kidstatus-kid-popup-container">
                  <h1 className="kidstatus-heading">Change Status</h1>
                  <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    onClick={close}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="kidstatus-para-container">
                  <p className="kidstatus-kid-para">
                    Do You Really Want to Change Status..?
                  </p>

                  <div className="kidstatus-kid-button-container">
                    <button
                      type="button"
                      className="kidstatus-closing-button"
                      onClick={() => updateStatus("InActive")}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      className="kidstatus-closing-button"
                      onClick={() => close()}
                    >
                      NO
                    </button>
                  </div>
                </div>
              </>
            );
          }}
        </Popup>

        <button type="button" className="activate-deactivate-buttons" onClick={onResetButton}>
          RESET
        </button>
      </div>
      <div className="school-user-bg-container">
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
          <div className="school-approval-page-container">
          <p >Page 1 (0 of at least 0 items)</p>

          <hr className="school-approval-line" />
        </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SchoolUserKidStatus;

// import React, { useEffect, useState ,useReducer} from "react";
// import axios from 'axios'
// import KidsTable from "./KidsTable/KidsTable";

// import Popup from 'reactjs-popup'

// import './KidsStatus.css'

// import Cookies from "js-cookie";

// const KidsStatus = () =>{
//     const[statusKid,setStatusKid] = useState([])
//     const[buttonsDisable,setButtonsDisable] = useState(true)
//     const[kidIdSelected, setkidIdSelected] = useState()
//     const [updateStatus, setUpdateStatus]= useState()
//     const [removeBox,setRemoveBox] = useState()
//     // const [paginatedPosts, setPaginatedPosts] = useState();
//     // const [currentPage, setcurrentPage] = useState(1)

//     const loginToken= Cookies.get("loginToken")

//     const buttons = buttonsDisable? 'trigger-button1': 'trigger-button'

//     const selectedKidId=(id)=>{
//         setkidIdSelected(id)
//     }

//     useEffect(() => {
//         const getKidStatus=()=>{
//             axios.get('http://192.168.0.116:8280/Mas_KIDS_Details/1.0/get_kid_Records?mas_userId=ct2@gmail.com&mas_requestedOn=2022-6-28%2014:37:16&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Safari/537.36&mas_guid=cec12daa-943f-ac03-ee8f-33636f145179&mas_geolocation=anonymous&limit=10&totalResults=true', {
//                 headers: {
//                  Accept:"application/json",
//                   Authorization: `Bearer ${loginToken}`
//                 }
//               })
//               .then((res) => {console.log(res.data);
//                  setStatusKid(res.data.body);
//                 //  setPaginatedPosts((res.data.body).slice(0).take(pageSize).value());

//                  });

//         }

//         getKidStatus()

//        }, [updateStatus]);

//        const column = [
//        {heading:'Select', value :'checkbox'},
//         {heading: 'Kid ID', value: 'mas_kidId'},
//         {heading: 'First Name', value: 'mas_firstName'},
//         {heading: 'Last Name', value: 'mas_lastName'},
//         {heading: 'School Name', value: 'mas_schoolName'},
//         {heading: 'Created On', value: 'mas_createdOn'},
//         {heading: 'kid Status', value: 'mas_kidStatus'},

//       ]

//       const disableButtons = showOrHide =>{
//               setButtonsDisable(showOrHide)
//               setRemoveBox(showOrHide)
//               console.log(setButtonsDisable)
//       }

//       const onResetButton = () =>{
//                setButtonsDisable(true)
//                 setRemoveBox(true)
//                }

//     return(

//    <div>

//     <div className="container ">
//             <Popup
//                 modal
//                 trigger={

//                     <button type="button" className={buttons} disabled = {buttonsDisable}>
//                         ACTIVATE
//                     </button>

//                 }

//             >

//                 {close =>{

//                     const updateStatus = (status) =>{
//                         setButtonsDisable(true)
//                         setRemoveBox(true)
//                         close()
//                       fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
//                         method: 'POST',
//                         headers: {
//                             "Content-Type":"application/json",
//                             Authorization: `Bearer ${loginToken}`
//                         },
//                         body: JSON.stringify({
//                             "header": {
//                                 "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
//                                 "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
//                                 "geoLocation": ""
//                             },
//                             "body": {
//                                 "mas_kidId": [
//                                     kidIdSelected
//                                 ],
//                                 "mas_kidStatus": status
//                             }
//                         })
//                       })

//                       .then((data) => {
//                         setUpdateStatus(data)
//                       })

//                       .catch((error) => {
//                         console.error(error);
//                       });

//                     }

//                     return (
//                     <>

//                        <div className="kid-popup-container col-md-4">
//                             <h1 className="kidStatus-heading">Change Status</h1>
//                             <button type="button" className="close" aria-label="Close" onClick = {close}>
//                                <span aria-hidden="true">&times;</span>
//                             </button>
//                             </div>

//                         <div className="para-container ">
//                         <p className="kid-para">Do You Really Want to Change Status..?</p>

//                         <div className="kid-button-container">
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => updateStatus("Active")}
//                         >
//                             YES
//                         </button>
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => close()}
//                         >
//                             NO
//                         </button>
//                         </div>
//                         </div>

//                         </>

//                 )}}

//             </Popup>

// <Popup
//                 modal
//                 trigger={

//                     <button type="button" className={buttons}  disabled = {buttonsDisable}>
//                         DEACTIVATE
//                     </button>

//                 }

//             >

//                 {close => {
//                   const updateStatus = (status) =>{

//                     setButtonsDisable(true)
//                     setRemoveBox(true)
//                     close()
//                   fetch('http://192.168.0.116:8280/mas_kids_Status_Change/1.0/Kid_Status_Change', {
//                     method: 'POST',
//                     headers: {
//                         "Content-Type":"application/json",
//                         Authorization: `Bearer ${loginToken}`
//                     },
//                     body: JSON.stringify({
//                         "header": {
//                             "guid": "a82e064e-bc21-3e5b-68dc-acfbc600f376",
//                             "requestedFrom": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
//                             "geoLocation": ""
//                         },
//                         "body": {
//                             "mas_kidId": [
//                                 kidIdSelected
//                             ],
//                             "mas_kidStatus": status
//                         }
//                     })
//                   })

//                   .then((data) => {
//                     setUpdateStatus(data)
//                   })

//                   .catch((error) => {
//                     console.error(error);
//                   });

//                 }

//                 return(

//                     <>

//                        <div className="kid-popup-container">
//                             <h1 className="kidStatus-heading">Change Status</h1>
//                             <button type="button" class="close" aria-label="Close" onClick = {close}>
//                                <span aria-hidden="true">&times;</span>
//                             </button>
//                             </div>

//                         <div className="para-container">
//                         <p className="kid-para">Do You Really Want to Change Status..?</p>

//                         <div className="kid-button-container">
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => updateStatus("InActive")}
//                         >
//                             YES
//                         </button>
//                         <button
//                             type="button"
//                             className="closing-button"
//                             onClick={() => close()}
//                         >
//                             NO
//                         </button>
//                         </div>
//                         </div>
//                         </>

//                 )}
//             }
//             </Popup>

//             <button type="button" className = {buttons} onClick = {onResetButton}>
//                 RESET
//             </button>
//         </div>

//         <KidsTable  data= {statusKid} column = {column} disableButtons = {disableButtons} selectedKidId={selectedKidId} />

//       </div>
//     )

// }

// export default KidsStatus
