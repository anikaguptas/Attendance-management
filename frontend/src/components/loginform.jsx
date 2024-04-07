import React from 'react';
import './loginform.css';
import attendancepng from '../images/attendancepng.png';
const Loginform = () => {
  return (
        <form action=''>
                 <div className='wrapper'>
                    <img src={attendancepng}></img>
                    <div className='inputdiv'>
                        <div className='inputno'>
                            <input placeholder='Registration No.' id='inputstyle'></input>
                        </div>
                        <div className='inputhostel'>
                            <input type='text' placeholder='Hostel No.' id='inputstyle'></input>
                        </div>
                    </div>
                    <div className='buttondiv'>
                    <button type='sumbit'>Sumbit</button>
                    </div>
                        <div className='admin'>
                              <a href='#'>admin login</a>
                        </div> 
                </div>  
        </form>
    
  )
}

export default Loginform
