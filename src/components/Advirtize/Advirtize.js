import React from 'react';
import './Advirtize.css';
import {TbHeartRateMonitor} from 'react-icons/tb'
import MiddleAdd from './MiddleAdd';

const Advirtize = () => {
    return (
        <div className="containerAd">
            <div className="contentDiv">
               
                
            <div class="box">
                <img src="http://www.istudentz.com/wp-content/uploads/2015/12/request_timed_out-350x250.jpg" alt=""/>
                    <div class="contentProfile">
                        
                        <div className="profile">
                            <div className="profileIcon">
                                <TbHeartRateMonitor/>
                            </div>
                            <h3>Profile Evaluation</h3>
                        </div>
                            <p>Complete the form and get best of universities/Scholarships suggestions as per your profile.</p>
                    </div>
            </div>
                <div className='itemAd'>
                    <MiddleAdd/>
                    
            
                    </div>
                <div className='itemAd'>
                    <h3>Find the best University</h3>
                    <div className="select">
                        <select className="selectdiv firstDiv" name="format" id="format">
                            
                            <option selected disabled>Select Country </option>
                            <option value="austraila">Austraila</option>
                            <option value="austraila">bangladesh</option>
                            <option value="canada">Canada</option>
                            <option value="ireland">Ireland</option>
                            <option value="singapur">Singapur</option>
                            <option value="new-eland">New Zeland</option>
                            <option value="united-states">United States</option>
                           
                        </select>
                    </div>
                    <br />
                    <div className="select">
                        <select className="selectdiv" name="format" id="format">
                            
                            <option selected disabled>Select Course </option>
                            <option value="austraila">19th century Literature</option>
                            <option value="austraila">Computer Animation</option>
                            <option value="canada">Game Design</option>
                            <option value="ireland">Computer Science</option>
                            <option value="singapur">Software Engineering</option>
                            <option value="new-eland">Academic Health</option>
                           
                           
                        </select>
                    </div>
                    <br />

                    <button className="submitBtn"type="submit">Submit</button>
                </div>
           </div>
        </div>
    );
};

export default Advirtize;