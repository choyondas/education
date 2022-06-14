import React from 'react';
import { MdCall } from 'react-icons/md';
import './Topnav.css'
import logo from '../../../../images/logo.gif'
const Topnav = () => {
    return (
        <div className="TopNav container">
            <div className="containerNav">
                <div className="logo"><a href="http://www.istudentz.com/"><img src={logo} alt="" /></a> </div>
                <div className="content">
                    <span className='call-icon'><MdCall /></span>
                    <div className="call">
                        <h3>20183290238</h3>
                        <p>Call us</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Topnav;