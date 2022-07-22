import React from 'react';
import SchoolUserAddHoliday from './SchoolUserAddHoliday/SchoolUserAddHoliday';
import './SchoolUserHolidayManagement.css'

const SchoolUserHolidayManagement = () => {
  return (
    <div>

      <div className='holiday-bg-container'>
        <div className='add-academic-year-container'>
          <h1 className='user-holiday-acadamic-heading'>Please Add academic Year</h1>
        </div>
        <div>
          <div className='bottom-head-container'>
            <h1 className='bottom-head'>Manage Holiday</h1>
            <p className='span-para'><span className='holiday-pop-up-button'><SchoolUserAddHoliday /></span>Add Holiday</p>
          </div>
        </div>
        <div className='table-container'>
          <div className='tbe-container'>
            <table className="table table-bordered">
              <thead style={{ width: "100%", overflow: "auto" }}>
                <tr className='holiday-management-table-head'>
                  <th className='holiday-management-table-heading-hover'>Action</th>
                  <th className='holiday-management-table-heading-hover'>Holiday Name</th>
                  <th className='holiday-management-table-heading-hover'>Holiday Group</th>
                  <th className='holiday-management-table-heading-hover'>Holiday Date</th>
                  <th className='holiday-management-table-heading-hover'>Description</th>
                </tr>
              </thead>
              <tbody className='table-data-holiday'>
                <tr>
                  <td className='table-body'>
                    No data to display
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#1" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>

                  </a>
                </li>
                <li className="page-item"><a class="page-link" href="#2">1</a></li>

                <li className="page-item">
                  <a className="page-link" href="#3" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>

                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SchoolUserHolidayManagement;