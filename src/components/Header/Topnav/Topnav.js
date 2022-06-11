import React from 'react';
import { MdCall } from 'react-icons/md';
import './Topnav.css'
import logo from '../../../../src/images/logo.gif'
const Topnav = () => {
    return (
        <div className="TopNav">
            <div className="container">
                <div className="logo"><img src={logo} alt="" /></div>
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