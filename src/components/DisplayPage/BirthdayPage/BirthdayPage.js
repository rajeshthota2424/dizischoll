import './BirthdayPage.css';


const BirthdayPage = () => {
    return(
        <div className='bday-bg-container'>
            <div className='head-container' style={{backgroundColor:"#0074D9"}}>
            <span style={{color: "white","font-size": "20px"}}>
                <p style={{"text-align": "center"}}>Birthdays Today </p>
            </span>
            </div>
            <div className='inner-container'>
                <p className='bday-paragraph'>No items to disply</p>
            </div>
            
        </div>
    )
}
export default BirthdayPage;