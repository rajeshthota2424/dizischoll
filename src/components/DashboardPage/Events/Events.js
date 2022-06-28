import React from 'react';
import './Events.css';

const Events = () => {
    return(
        <div className='event-container'>
            <div>
                <h1 className='bday-main-heading'>Events</h1>
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

export default Events;