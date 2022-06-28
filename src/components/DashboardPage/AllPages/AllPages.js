import React from 'react';
import './AllPages.css'
import ClassTeacher from '../ClassTeacher/ClassTeacher';
import Birthday from '../Birthday/Birthday';
import Attendence from '../Attendence/Attendence';
import Events from '../Events/Events';
import Holiday from '../Holiday/Holiday';
import KidApprovals from '../KidApprovals/KidApprovals'
import HomeFooter from '../../HomeFooter/HomeFooter';
import Header from '../../Header/Header';



const AllPages = () => {
    return(
        <div className='allpage-bg-container'>
        <Header />
            <div className='upper-container'>
                <ClassTeacher />
                <Birthday />
                <Attendence />
            </div>
            <div className='lower-container'>
                <KidApprovals/>
                <Events />
                <Holiday />
            </div>
            <HomeFooter />
        </div>
    )
}

export default AllPages;