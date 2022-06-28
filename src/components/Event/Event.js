// import axios from 'axios';
// import React,{ useEffect, useState} from 'react';
// import EventTable from './EventManagementTable/EventTable';
// import './Event.css';
// import { FaRegEye } from "react-icons/fa";




// function Event() {
//   const [dataTable,setDataTable] = useState([]);
  

//   useEffect(() => {
//    axios.get('https://192.168.0.116:8243/mas_EventManagement/1.0/mas_getevents?mas_SchoolUniqueId=5911355945&mas_class=SECOND CLASS&mas_section=&mas_guid=123&mas_requestedFrom=234&mas_requestedOn=324&mas_geoLocation=324',
//     {
//   headers: {
//     Authorization: `Bearer df0a65ea-bd42-3ff7-8c57-8f72d53a2a0c`
//   }
// })
//     .then(res => setDataTable(res.data))
//     .catch(err => console.log(err))
//   }, []);

  



//   const column = [
//     {heading: 'Action', value: <FaRegEye />},
//     {heading: 'Event Name', value: 'mas_eventname',sort: true },
//     {heading: 'Event Group', value: 'mas_eventgroup',sort: true },
//     {heading: 'Event From Date', value: 'mas_eventFromDate',sort: true },
//     {heading: 'Event To Date', value: 'mas_eventToDate',sort: true },
//     {heading: 'Event From Time', value: 'mas_eventFromTime',sort: true },
//     {heading: 'Event To Time', value: 'mas_eventToTime',sort: true },
//     {heading: 'Event Location', value: 'mas_eventVenue',sort: true },
//     {heading: 'Description', value: 'mas_eventdescription',sort: true },
//   ]

  

// return (
//   <div>
//     <EventTable data= {dataTable} column = {column} /> 
    
//   </div>
// )
 
// }

// export default Event;

// import React, {useEffect, useState} from "react";
// import  axios  from 'axios';
// import _ from 'lodash';
// import './Event.css';
// import { ImEye } from "react-icons/im";
// import {BsTrash} from "react-icons/bs";
// import {BiEdit} from "react-icons/bi";
// import Popup from 'reactjs-popup';

// import 'reactjs-popup/dist/index.css'

// const pageSize = 15;

// const Event = () => {
//   const [posts,setPosts] = useState();
//   const [paginatedPosts, setPaginatedPosts] = useState();
//   const [currentPage, setcurrentPage] = useState(1)
  
  

//   useEffect(() => {
//     axios
//       .get('https://192.168.0.116:8243/mas_EventManagement/1.0/mas_getevents?mas_SchoolUniqueId=5911355945&mas_class=SECOND%20CLASS&mas_section=&mas_guid=123&mas_requestedFrom=234&mas_requestedOn=324&mas_geoLocation=324',
//       {
//         headers: {
//           Authorization: `Bearer df0a65ea-bd42-3ff7-8c57-8f72d53a2a0c`,
//         }
//       })
//       .then((res) => {console.log(res.data)
//       .catch((err) => {console.log(err)})
//       setPosts(res.data)
//       setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
//     })
//  }, []);

//       const pageCount = posts? Math.ceil(posts.length/pageSize) : 0;
//       if(pageCount === 1) return null;
//       const page = _.range(1, pageCount+1);

//       const pagination = (pageNo) => {
//         setcurrentPage(pageNo);
//         const startIndex = (pageNo -1)* pageSize;
//         const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
//         setPaginatedPosts(paginatedPost)
//       }
      


//   return (
//     <div>
//       {
//         !paginatedPosts ? ("No data found") : (
//           <table className="table table-bordered" >
//             <thead>
//               <tr className='table-head'>
//                 <th>Action</th>
//                 <th>Event Name</th>
//                 <th>Event Group</th>
//                 <th>Event From Date</th>
//                 <th>Event To Date</th>
//                 <th>Event From Time</th>
//                 <th>Event To Time</th>
//                 <th>Event Location</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody className="body">
//               {
//                 paginatedPosts.map((post, index) =>(
//                   <tr key = {index} className="table-body-container body">
//                     <td className="body">
//                     <div className="all-popup-container">
//         <div className='pop-up-container'>
//         <Popup modal
//           trigger={
//               <button type="button" className="eye-button">
//                   <span><ImEye className="eye"/> </span>
//               </button>}>
              
          
//           <div className='eye-bg-container'>
//             <h1 className='eye-head'>view Event</h1>
//           </div>
//         <div>
        
//           <h4 className='event-head'>Event</h4>
//           <p>{post.mas_eventname}</p>

//     <p><label htmlFor='holidayGroup' className='paragrph'>Description:</label></p>
//     <textarea id="holidayGroup" name="holidayGroup" rows="10" cols="80">
//     {post.mas_eventdescription}
//     </textarea>
//     <div className='button-container'>
//       <button type="submit" className="trigger-button">
//             Ok
//       </button>
//       </div>
//   </div>

//     </Popup>
//     </div>
//     <div>
//     <BiEdit className="edit"/>
//     </div>
// <div >

// <Popup
// modal
// trigger={
// <button type="button" className="trash-popup-button" >
// <BsTrash className="trash"/>
// </button>}>
// {close => (
//   <>
//   <div className='trash-container'>
//   <div className='trash-heading-container'>
//     <h1 className='trash-popup-heading'> Delete Event</h1>
//     <button type="button" className="close " onClick={() => close()} aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//     <p className='trash-para'>Are you sure you want to Delete The selected Event?</p>
//     <div className="trash-button">
//     <button
//     type="button"
//     className="trigger-button"
//     onClick={() => close()}>
//       YES
//     </button>
//   <button
//     type="button"
//     className="trigger-button "
//     onClick={() => close()}>
//       NO
//     </button>
//     </div>
//   </div>
//   </>)}
// </Popup>
// </div>
// </div>
//         </td>
//                     <td className="body">{post.mas_eventname}</td>
//                     <td className="body">{post.mas_eventgroup}</td>
//                     <td className="body">{post.mas_eventFromDate}</td>
//                     <td className="body">{post.mas_eventToDate}</td>
//                     <td className="body">{post.mas_eventFromTime}</td>
//                     <td className="body">{post.mas_eventToTime}</td>
//                     <td className="body">{post.mas_eventVenue}</td>
//                     <td className="body">{post.mas_eventdescription}</td>
                    
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table>
//         )
//       } 

//       <nav className="d-flex justify-content-center ">
//         <ul className="pagination">
//           {
//             page.map((page) => (
//               <li className={
//               page === currentPage? "page-item active":"page-item"
//               }>
//               <p className="page-link"
//               onClick={()=>pagination(page)}>{page}</p>
//               </li>
//             ) )
//           }
//         </ul>
//       </nav>
//     </div>
//     );
// }

//  <Popup
// modal
// trigger={
// <button type="button" className="trash-popup-button" >
// <BsTrash className="trash"/>
// </button>}>
// {close => (
//   <>
//   <div className='trash-container'>
//   <div className='trash-heading-container'>
//     <h1 className='trash-popup-heading'> Delete Event</h1>
//     <button type="button" className="close " onClick={() => close()} aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//     <p className='trash-para'>Are you sure you want to Delete The selected Event?</p>
//     <div className="trash-button">
//     <button
//     type="button"
//     className="trigger-button"
//     onClick={() => close()}>
//       YES
//     </button>
//   <button
//     type="button"
//     className="trigger-button "
//     onClick={() => close()}>
//       NO
//     </button>
//     </div>
//   </div>
//   </>)
// </Popup> 

 
// export default Event;


import React, {useEffect, useState} from "react";
import  axios  from 'axios';
import _ from 'lodash';
import { ImEye } from "react-icons/im";
import {BsTrash} from "react-icons/bs";
import {BiEdit} from "react-icons/bi";
import './Event.css'

const pageSize = 15;


const EventManagement = () => {
  const [posts,setPosts] = useState();
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1)
  const [popUp, setPopUp] = useState(false);
    const handleClickOpen = () => {
        setPopUp(!popUp);
    }
    const closePopup = () => {
        setPopUp(false)
    }
    
  
  
  useEffect(() => {
       axios.get('http://192.168.0.116:8280/mas_EventManagement/1.0/mas_getevents?mas_SchoolUniqueId=5911355945&mas_class=SECOND%20CLASS&mas_section=B&mas_guid=32ce8ac8-cad5-0a4f-dd23-e147bc94f158&mas_requestedFrom=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/102.0.0.0%20Safari/537.36&mas_requestedOn=2022-6-28%2014:30:47&mas_geoLocation=123',
        {
      headers: {
        Authorization: `Bearer 4f7eb322-50fe-3c77-8912-a516899f6936`
      }
    })
      .then((res) => {console.log(res.data)
      setPosts(res.data)
      setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());})
    .catch((err) => {console.log(err)})
       }, []);
    
  

      const pageCount = posts? Math.ceil(posts.length/pageSize) : 0;
      if(pageCount === 1) return null;
      const page = _.range(1, pageCount+1);

      const pagination = (pageNo) => {
        setcurrentPage(pageNo);
        const startIndex = (pageNo -1)* pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPost)
      }
      


  return (
    <div>
      {
        !paginatedPosts ? ("No data found") : (
          <table className="table table-bordered" >
            <thead>
              <tr className='table-head'>
                <th>Action</th>
                <th>Event Name</th>
                <th>Event Group</th>
                <th>Event From Date</th>
                <th>Event To Date</th>
                <th>Event From Time</th>
                <th>Event To Time</th>
                <th>Event Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="body">
              {
                paginatedPosts.map((post, index) =>(
                  <tr key = {index} className="table-body-container body">
                    <td className="body">
                    <div className="all-popup-container">
        
        <div>
          <ImEye className="eye"/>
        </div>
        <div>
          <BiEdit className="edit"/>
        </div>
        <div>
            <button onClick={handleClickOpen} className='eye-button'><BsTrash className="trash"/></button>
            <div >
            {popUp? 
                <div >
                    <div className="popup bg">
                        <div className="p-header">
                            <h1 className="p-head">
                                View Event
                            </h1>
                            <h1 className="p-para"
                            onClick={closePopup}>
                                X
                            </h1>
                        </div>
                        <div>
                            <p>Are you sure you want to Delete The selected Event?</p>
                        </div>
                        <div className="button-bg">
                    <button type="submit" onClick={closePopup} className='pop-button btn-1'>Yes</button>
                    <button type="submit" onClick={closePopup} className='pop-button btn-2'> No</button>
                    </div>
                    </div>
                    
                </div>: ""}
            </div>
        </div>
</div>
        </td>
                    <td className="body">{post.mas_eventname}</td>
                    <td className="body">{post.mas_eventgroup}</td>
                    <td className="body">{post.mas_eventFromDate}</td>
                    <td className="body">{post.mas_eventToDate}</td>
                    <td className="body">{post.mas_eventFromTime}</td>
                    <td className="body">{post.mas_eventToTime}</td>
                    <td className="body">{post.mas_eventVenue}</td>
                    <td className="body">{post.mas_eventdescription}</td>
                    
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      } 

      <nav className="d-flex justify-content-center ">
        <ul className="pagination">
          {
            page.map((page) => (
              <li className={
              page === currentPage? "page-item active":"page-item"
              }>
              <p className="page-link"
              onClick={()=>pagination(page)}>{page}</p>
              </li>
            ) )
          }
        </ul>
      </nav>
    </div>
    );
}
 
export default EventManagement;
