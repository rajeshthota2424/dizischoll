import React, {useState, useEffect} from "react";
import "./SchoolUserAddSubject.css"
import Cookies from "js-cookie";
import axios from "axios";


const SchoolUserADDSubject = () => {
    const loginToken = Cookies.get("loginToken");
    const [subjectName, setSubjectName] = useState();
    const [subjectType, setSubjectType] = useState();
    const [saveSubject, setSaveSubject] = useState();
    const [addSubjectData, setAddSubjectData] = useState([])

    
    const loggedInUserProfile=JSON.parse(localStorage.getItem("diziUserProfile"))
    console.log(loggedInUserProfile.mas_schoolUniqueId)
    
    const subjectTypeDropdwonHandler = (event) => {
        setSubjectType(event.target.value)
        console.log(event.target.value)
    }

    const formSubmitionHandler = (event) => {
        event.preventDefault()
    }
//save api call
    const onsaveAddSubjectHandler = () => {

    const postAddSubject = async () => {
        const response = await fetch(
          "http://192.168.0.116:8280/mas_schoolsubjectsInsertion/1.0/school",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${loginToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              header: {"guid":"6413bbcb-2e0a-f3bd-5e04-ef0de46328e1","requestedOn":"2022-7-21.13:56:30","requestedFrom":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","geoLocation":"d"},
              body: {
                "mas_SchoolUniqueId":"4556523031",
                "type": subjectType,
                "subjects":subjectName
            }
            }),
          }
        );

        const respJson = await response.json();
        setSaveSubject(respJson);
      };
      postAddSubject();
    }

// get saved data api call
useEffect(() => {
    axios
      .get(
        "http://192.168.0.116:8280/mas_schoolsubjectsInsertion/1.0/school?mas_SchoolUniqueId=4556523031",
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      ).then((res) => {
        console.log(res.data.body);
        setAddSubjectData(res.data.body)
      }).catch((err) => {
        console.log(err)
      })
    },[]);
    console.log(addSubjectData)

    return (
        <div className="school-user-add-sub-container">
            <div className="school-user-add-subject-flex-container">
            <div className="form-container-add-sub">
                <form onSubmit={formSubmitionHandler}>
                    <div className="add-sub-main-heading-outer-container">
                    <div className="add-sub-main-heading-container">
                        <h1 className="add-sub-main-heading">Add Subject</h1>
                    </div>
                    </div>
                    <hr className="add-sub-hr-line"/>
                        <label className="add-sub-label">Subject <br />
                            <input type="text"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)} 
                            className="add-sub-input-element"/>
                        </label>
                        <label className="add-sub-label">Type <br />
                        <select className="add-sub-input-element"
                        value={subjectType}
                        onChange={subjectTypeDropdwonHandler} >
                            <option value="main">Main</option>
                             <option value="optional">Optional</option>
                             <option value="extracurricular">Extra Curricular</option>
                         </select>
                        </label>
                        <div>
                            <button type="button" 
                            className="add-sub-save-button"
                            onClick={onsaveAddSubjectHandler}
                            >
                                Save
                            </button>
                        </div>
                </form>
            </div>
            <div className="add-sub-table-container">
            <table className="table table-bordered add-sub-table">
              <thead>
                <tr className='holiday-management-table-head'>
                  <th className='holiday-management-table-heading-hover'>Subject</th>
                  <th className='holiday-management-table-heading-hover'>Type</th>
                </tr>
              </thead>
              <tbody>

                {addSubjectData.map((eachSub, index) => {
                    return (
                    <tr key={index} className="add-sub-table-body-container body">
                    <td className="body">{eachSub.Subject}</td>
                    <td className="body">{eachSub.Type}</td>
                  </tr>
                )})}
              </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default SchoolUserADDSubject;
