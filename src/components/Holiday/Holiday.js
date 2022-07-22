// import React from 'react';
// import  'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './Holiday.css';

// const Holiday = () =>{

//     const products = [
//         { },
//     ]

//     const columns = [
//         { dataField: 'action', text: 'Action', sort: true },
//         { dataField: 'holidayname', text: 'Holiday Name', sort: true },
//         { dataField: 'holidaygroup', text: 'Holiday Group', sort: true },
//         { dataField: 'holidaydate', text: 'Holiday Date', sort: true },
//         { dataField: 'description', text: 'Description', sort: true }
//       ];

//       const defaultSorted = [{
//         dataField: 'holidayname',
//         order: 'desc'
//       }];

//       const pagination = paginationFactory({
//         page: 0,
//         sizePerPage: 0,
//         lastPageText: '>>',
//         firstPageText: '<<',
//         nextPageText: '>',
//         prePageText: '<',
//         showTotal: true,
//         alwaysShowAllBtns: true,
//         onPageChange: function (page, sizePerPage) {
//           console.log('page', page);
//           console.log('sizePerPage', sizePerPage);
//         },
//         onSizePerPageChange: function (page, sizePerPage) {
//           console.log('page', page);
//           console.log('sizePerPage', sizePerPage);
//         }
//       });

//       return (
//         <div>
//             <div>
//             <BootstrapTable bootstrap4 keyField='dataField' data={products}  columns={columns} defaultSorted={defaultSorted} pagination={pagination} />

//             </div>
//         </div>
//       )

// }

// export default Holiday; 

// /*import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import './Holiday.css'

// const Holiday = ({ text }) => {
//   const [key, setKey] = useState(1);

//   const scrolling = useSpring({
//     from: { transform: "translate(60%,0)" },
//     to: { transform: "translate(-60%,0)" },
//     config: { duration: 30000 },
//     reset: true,
//     //reverse: key % 2 === 0,
//     onRest: () => {
//       setKey(key + 10);
//     }
//   });

//   return (
//     <div key={key} className='scroll-bg'>
//       <animated.div style={scrolling} >Please Add Academic Year</animated.div>
//     </div>
//   );
// };

// export default Holiday;*/



import './Holiday.css';
import React from 'react';
import AddHoliday from './AddHoliday/AddHoliday';
import Header from '../Header/Header';
import HomeFooter from './../HomeFooter/HomeFooter';




const Holiday = () => {
  return (
    <div>
      <Header />

      <div className='holiday-bg-container'>
        <div>
          <h1 className='holiday-head'>Current Academic Year Plan: 2018-03-22 To 2019-04-03</h1>
        </div>
        <div>
          <div className='bottom-head-container'>
            <h1 className='bottom-head'>Manage Holiday</h1>
            <p className='span-para'><span className='holiday-pop-up-button'><AddHoliday /></span>Add Holiday</p>
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
      <HomeFooter />
    </div>
  );
}

export default Holiday;