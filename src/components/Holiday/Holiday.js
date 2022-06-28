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




const Holiday = () => {
    return ( 
        <div className='holiday-bg-container'>
        <Header />
            <div>
                <h1 className='holiday-head'>Current Academic Year Plan: 2018-03-22 To 2019-04-03</h1>
            </div>
            <div>
                <div className='bottom-head-container'>
                    <h1 className='bottom-head'>Manage Holiday</h1>
                    <p className='span-para'><span className='span-holiday'><AddHoliday/></span>Add Holiday</p>
                </div>
            </div>
            <div className='table-container'>
            <div className='tbe-container'>
            <table className="table table-bordered">
            <thead>
              <tr className='table-head'>
                <th>Action</th>
                <th>Holiday Name</th>
                <th>Holiday Group</th>
                <th>Holiday Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='table-body'>
                        No data to display
                    </td>
                </tr>
            </tbody>
            </table>
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#1" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#2">1</a></li>
   
    <li class="page-item">
      <a class="page-link" href="#3" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        
      </a>
    </li>
  </ul>
</nav>
</div>
            </div>
          
        </div>
     );
}

export default Holiday;