import React from 'react';
import './Explore.css';
import { HiArrowSmRight } from 'react-icons/hi';
const Explore = () => {
    return (
        <div  className=" explore">
            
            <div className=" exploreItem">
                <h3>
                    Explore more country options...
                </h3>
                <button>
                    <a href="http://www.istudentz.com/study-in-abroad/">
                        More 
                    </a>
                    <div>
                        <HiArrowSmRight/>
                    </div>
                </button>
            </div>
            <br />
            <br />
            
           
        </div>
    );
};

export default Explore;