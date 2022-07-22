
import React, { useEffect, useState } from "react";

import './KidApprovalTable.css'

const KidApprovalTable = (props) => {
    
    const { data, column, disableButtons,selectedKidId , removeCheckBox,buttons} = props
    console.log(buttons)
    

    const [data1, setData1]=useState([])

    useEffect(()=>{
        setData1(data)
    }, [data])
   
    return (

        <div className="status-container1">
             
            <table className="table">
           
                <thead>
                
                    {/* <tr className="table-head">
                        {column.map((item, index) => <th>{item.heading}</th>)}
                    </tr> */}
                    
                </thead>
                
                <tbody>
               
                { 
                
                    data1.length>0?
                   
                data1.map((item, index) => <TableBody removeCheckBox={removeCheckBox} disableButtons={disableButtons} 
                selectedKidId={selectedKidId} eachObj={item} />): ""}
                
                </tbody>
                
            </table>
            
        </div>
        
    )

}



// const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableBody = (props) => {

    const { eachObj,selectedKidId, removeCheckBox, disableButtons} = props
    const [checkedKidIds  , setCheckedKidIds]=useState([])
    const[checkboxStatus,setCheckboxStatus] = useState([])

    

    const onChangeCheckboxHandler=event=>{
        selectedKidId(eachObj.mas_kidId)
       if(event.target.checked){
        disableButtons(false)
        removeCheckBox(true)
      }
      else{
        disableButtons(true)
        removeCheckBox(false)
      }
          
    } 
    useEffect(()=>{
        
        
    }, [checkedKidIds])
    return (
            <tr>
                {/* <th >
                <input type="checkbox"  onChange={onChangeCheckboxHandler}
                 removeCheckBox = {removeCheckBox}/></th>
                <th >{eachObj.mas_kidId}</th>
                <th >{eachObj.mas_firstName}</th>
                <th >{eachObj.mas_lastName}</th>
                <th >{eachObj.mas_schoolName}</th>
                <th >{eachObj.mas_createdOn}</th>
                <th >{eachObj.mas_kidStatus}</th> */}
            </tr>
        )
}


export default KidApprovalTable;