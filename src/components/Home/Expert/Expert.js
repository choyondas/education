import React from 'react';
import './Expert.css'

import live from '../../../images/expert/live.gif';
import icon1 from '../../../images/expert/icon1.png';
import icon2 from '../../../images/expert/icon2.png';
import icon3 from '../../../images/expert/icon3.png';
import icon4 from '../../../images/expert/icon4.png';
const Expert = () => {
    return (
        <div className="header">
            <div className=" container">
                <div className="expertdiv">
                    <div className="item">
                <h1>ASK THE EXPERT</h1>
                <div className='live'>
                     <img src={live} alt="" />
               </div>
                        <div className="iconDiv">
                            <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Expert;