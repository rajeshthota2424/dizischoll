import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './AboutMe.css';



const AboutMe = () => {

    const [data1,setData] = useState({})

    useEffect(() => {
        axios.get('http://192.168.0.116:8280/mas_getuserprofiles/v1/getUserProfile?mas_userId=ct2%40gmail.com&mas_guid=dfg&mas_requestedOn=hfgh&mas_requestedFrom=gfh&mas_geoLocation=gfh',
         {
       headers: {
         Authorization: `Bearer 8933938d-b6f7-325b-8ae5-e7abaad000d0`
       }
     })
       .then((res) => {
       setData(res.data.body)})
     .catch((err) => {console.log(err)})
        }, []);

        
        const [showSaveBtn, setShowSaveBtn]=useState(false)
        const inputFileHandler=()=>{
            setShowSaveBtn(!showSaveBtn)
            
        }
        console.log(showSaveBtn)

return (
    <div className='about-layout abt-lyt'>
    <div className='container-fluid abt-bg-cnt'>
   
    <div className='row'>
    
    <div class="col-md-12" style={{"text-align": "center"}}>
        <h1 className='abt-hed'>
            <span className='shad'>About Me</span>
        </h1>
    </div>
    </div>
    <div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4'>
    <div className='frm-layout' id='form-container'>
        <div className='oj-flex'>
            <div class="oj-flex-item" style={{"text-align": "center"}}> </div>
        </div>
        <form>
        <div class="oj-form oj-sm-odd-cols-12 oj-md-odd-cols-5 oj-md-labels-inline">
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-name'>Name:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.mas_firstName} {data1.mas_lastName}</p>
                </div>
            </div>
            </div>
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-id'>School UniqueId:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.mas_schoolUniqueId}</p>
                </div>
            </div>
            </div>
           
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-school'>School Role:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.Role}</p>
                </div>
            </div>
            </div>
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-email'>Email ID:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.mas_userId}</p>
                </div>
            </div>
            </div>
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-class'>Class:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.mas_class}</p>
                </div>
            </div>
            </div>
            
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-created'>Created On:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>{data1.mas_createdOn}</p>
                </div>
            </div>
            </div>
            <div className='oj-flex'>
            <div className='oj-flex-item'>
            <label for="control11" style={{"line-height":2}} className='lable-status'>Status:</label>
            </div>
            <div className='oj-flex-item'>
                <div class="oj-inputtext oj-form-control oj-component oj-read-only">
                    <p>Active</p>
                </div>
            </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        </div>
        <div class="row" style={{"margin-bottom": "45px"}}>
            <div class="col-md-4 col-md-offset-4">
                <h2 className='tech-img'>Teacher Image</h2>
        <img width="150px"
         height="150px" 
         data-bind="attr:{src: imagePath1}" 
         style={{"padding-bottom": "5px"}}
         src="http://192.168.0.116:8080/getimages/classteacher/5911355945/ct2@gmail.com.jpg"
         alt='teacher img'
         className='img-tech'
         />
         <input type="file" id="filePicker" onChange={inputFileHandler} className='input-file'/>
         <div>
            {   showSaveBtn?(
                <button classname='sve-btn' type='submit' id="btnUpld" data-bind="click: updateimage">Save Image</button>): (null)}
        </div>
        </div>
        </div>
    </div>
    </div>   
)
}

export default AboutMe;