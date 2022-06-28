import './Holiday.css';
import React from 'react';

const Holiday = () => {
    return(
        <div className='holiday-container'>
            <div>
                <h1 className='bday-main-heading'>Holiday</h1>
            </div>
            <hr className='hr-line'/>
            <div className='bday-bottom-container'>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Year</p>
                </div>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Month</p>
                </div>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Week</p>
                </div>
            </div>
        </div>
    )
}

export default Holiday;