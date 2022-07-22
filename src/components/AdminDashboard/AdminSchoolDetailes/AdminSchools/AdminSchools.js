import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";
import "./AdminSchools.css";

const pageSize = 8;

const AdminSchools = () => {
    const [is_checked, set_is_checked] = useState(false);
    const [posts, setPosts] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    const [buttonsDisable, setButtonsDisable] = useState(true)
    const [removeBox, setRemoveBox] = useState()
    const [updateStatus, setUpdateStatus] = useState()

    const onChangeCheckboxHandler = event => {
        set_is_checked(event.target.checked)

        if (event.target.checked) {
            disableButtons(false)
        }
        else {
            disableButtons(true)
        }
        set_is_checked('')
    }

    const buttons = buttonsDisable ? 'trigger-button1' : 'trigger-button'

    const disableButtons = showOrHide => {
        setButtonsDisable(showOrHide)
        setRemoveBox(showOrHide)

    }

    const onResetButton = () => {
        setButtonsDisable(true)
        setRemoveBox(true)
    }

    const loginToken = Cookies.get("loginToken");

    //table data

    useEffect(() => {
        axios
            .get(
                "http://192.168.0.116:8280/mas_school_status_change/1.0/getr_schools?mas_guId=1c6fef67-1e60-568a-52d4-d78a6e5d2119&mas_requestedOn=2022-7-20%2015:39:31&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/103.0.0.0%20Safari/537.36&mas_geoLocation=anonymous",
                {
                    headers: {
                        Authorization: `Bearer ${loginToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data.body);
                setPosts(res.data.body);
                setPaginatedPosts(
                    _(res.data.body)
                        .slice(0)
                        .take(pageSize)
                        .value()
                );
            })
            .catch((err) => {
                console.log(err);
            });
    },[updateStatus]);

    const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const page = _.range(1, pageCount + 1);

    const pagination = (pageNo) => {
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(posts)
            .slice(startIndex)
            .take(pageSize)
            .value();
        setPaginatedPosts(paginatedPost);
    };

    return (
        <div>
            <div className="school-detailes-bg-clr">
                <div className="trash-popup-container">
                <Popup
          modal
          trigger={
            <button type="button" className={buttons} disabled={buttonsDisable}>
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
            <button type="button" className={buttons} disabled={buttonsDisable}>
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
                "http://192.168.0.116:8280/mas_school_status_change/1.0/changeStatus",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${loginToken}`,
                },
                  body: JSON.stringify({
                        header: {
                            geoLocation: "",
                            guid: "",
                            requestedFrom: "",
                            requestedOn: "",
                        },
                        body: {
                            mas_SchoolUniqueId: "8314614399",
                            mas_status:"false"
                        },
                  }),
                }
              )
                .then((data) => {
                    console.log(data.body)
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

                    <Popup
                        modal
                        trigger={
                            <button
                                type="button"
                                className={`trash-trigger-button ${buttons}`}
                                disabled={buttonsDisable}
                            >
                                DEACTIVATE
                            </button>
                        }
                    >
                        {(close) => {
                            const updateStatus = () => {
                                close();
                                setButtonsDisable(true)
                                setRemoveBox(true)
                                axios
                                    .post(
                                        "http://192.168.0.116:8280/mas_school_status_change/1.0/changeStatus",
                                        {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "application/json",
                                                Authorization: `Bearer ${loginToken}`,
                                            },
                                            data: {
                                                header: {
                                                    geoLocation: "",
                                                    guid: "",
                                                    requestedFrom: "",
                                                    requestedOn: "",
                                                },
                                                body: {
                                                    mas_SchoolUniqueId: "3724862442",
                                                },
                                            },
                                        }
                                    )
                                    .then((res) => {
                                        console.log(res.data.body);
                                        setUpdateStatus(res.data.body);
                                    });
                            };

                            return (
                                <>
                                    <div className="trash-heading-container">
                                        <div className="trash-heading-container-mobile">
                                            <div className="eye-heading-inner-container">
                                                <h1 className="eye-event-heading">
                                                    Change Status
                                                </h1>
                                                <button
                                                    type="button"
                                                    className="close eye-close-button"
                                                    onClick={() => close()}
                                                    aria-label="close"
                                                >
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                            <div>
                                                <p className="eye-paragraph-event">
                                                    Do You Really Want To Change The Status..?
                                                </p>
                                            </div>
                                            <div className="delete-event-save-cancle-buttons">
                                                <button
                                                    type="button"
                                                    className="trash-ok-trigger-button-yes"
                                                    onClick={() => updateStatus("InActive")}
                                                >
                                                    Yes
                                                </button>
                                                <button
                                                    type="button"
                                                    className="trash-ok-trigger-button-No"
                                                    onClick={() => close()}
                                                >
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        }}
                    </Popup>

                </div>
                {!paginatedPosts ? (
                    "No data found"
                ) : (
                    <table className="table">
                        <thead className="event-management-table-border-head">
                            <tr className="event-management-table-head">
                                <th className="event-management-table-head-hover">Select</th>
                                <th className="event-management-table-head-hover">School Unique ID</th>
                                <th className="event-management-table-head-hover">First Name</th>
                                <th className="event-management-table-head-hover">Last Name</th>
                                <th className="event-management-table-head-hover">School Name</th>
                                <th className="event-management-table-head-hover">Email Id</th>
                                <th className="event-management-table-head-hover">Status</th>
                                <th className="event-management-table-head-hover">Activation/Deactivation Date</th>
                            </tr>
                        </thead>
                        <tbody className="body event-management-mobile-view-scroll">
                            {paginatedPosts.map((post, index) => {
                                console.log(post)
                                return (
                                    <tr key={index} className="table-body-container body">
                                        <td className="body">
                                            <input type="checkbox"
                                                onChange={onChangeCheckboxHandler}
                                                value={is_checked} />
                                        </td>
                                        <td className="body">{post.mas_schoolUniqueId}</td>
                                        <td className="body">{post.mas_firstName}</td>
                                        <td className="body">{post.mas_lastName}</td>
                                        <td className="body">{post.mas_schoolName}</td>
                                        <td className="body">{post.mas_emailId}</td>
                                        <td className="body">{post.mas_status === "true" ? "Active" : "InActive"}</td>
                                        <td className="body">{post.mas_modifiedOn}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}

                <nav className="d-flex justify-content-center ">
                    <ul className="pagination">
                        {page.map((page) => (
                            <li
                                className={
                                    page === currentPage ? "page-item active" : "page-item"
                                }
                            >
                                <p className="page-link" onClick={() => pagination(page)}>
                                    {page}
                                </p>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AdminSchools;