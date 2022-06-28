import React from 'react'
import './ClassTeacher.css'

const ClassTeacher = () =>{
    return(
    <div className='background-container'>
        <div>
            <div className='image-container1'>
                <img className='image1' 
                src = 'http://192.168.0.116:8080/getimages/classteacher/5911355945/ct2@gmail.com.jpg'
                alt='class teacher logo'
                />
            <div className='title-container'>
                <h1 className='title'>Class Teacher2 CT </h1>
                <h1 className='title'>Active </h1>
            </div>
            </div>
            <hr className='horizontal'/>
            <div className='school-details'>
                <p className='title1'>School Name:</p>
                <p className='title1'>santosh high school</p>
            </div>          
            <hr className='horizontal'/>
            <div className='school-details'>
                <p className='title1'>School UniqueId:</p>
                <p className='title1'>5911355945</p>
            </div>
            <hr className='horizontal'/>
            <div className='school-details'>
                <p className='title1'>Created On:</p>
                <p className='title1'>2018-02-04</p>
            </div>
            <hr className='horizontal'/>
        </div>
</div>

)

}

export default ClassTeacher