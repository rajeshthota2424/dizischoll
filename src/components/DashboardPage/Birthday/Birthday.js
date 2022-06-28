import React from 'react';
import './Birthday.css';

const Birthday = () => {
    return(
        <div className='birthday-container'>
            <div>
                <h1 className='bday-main-heading'>Birthday</h1>
            </div>
            <hr className='hr-line'/>
            <div className='bday-bottom-container'>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Month</p>
                </div>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Week</p>
                </div>
                <div>
                    <h1 className='bday-heading'>0</h1>
                    <p className='bday-description'>Today</p>
                </div>
            </div>
        </div>
    )
}

export default Birthday;