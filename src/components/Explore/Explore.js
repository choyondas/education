import React from 'react';
import './Explore.css';
import { HiArrowSmRight } from 'react-icons/hi';
const Explore = () => {
    return (
        <div  className=" explore">
            
            <div className=" exploreItem">
               <a href="http://www.istudentz.com/#
               "> <h3>
                    Explore more country options...
                </h3></a>
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