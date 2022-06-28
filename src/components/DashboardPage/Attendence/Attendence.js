import React from 'react';
import './Attendence.css';

const Attendence = () => {
    return (
        <div className='attendence-container'>
            <div>
                <h1 className='day-main-heading'>Attendence</h1>
            </div>
            <hr className='hr-line'/>
                <div className='inner-attendence-container'>
                    <h1 className='day-heading'><span className='span'>.</span>Total</h1>
                    <p className='day-description'>22</p>
                </div>
                <hr className='hr-line'/>
                <div className='inner-attendence-container'>
                    <h1 className='day-heading'><span className='span'>.</span>Kids Present</h1>
                    <p className='day-description'>0</p>
                </div>
                <hr className='hr-line'/>
                <div className='inner-attendence-container'>
                    <h1 className='day-heading'><span className='span'>.</span>Kids Absent</h1>
                    <p className='day-description'>0</p>
                </div>
                <hr className='hr-line'/>
                <div class="oj-flex-item oj-lg-12 " >
                    <span>
                        <h6 className="description" data-bind="text: todaydate">Wednesday, June 15, 2022</h6>
                    </span>
                </div>
            </div>
    )
}

export default Attendence;