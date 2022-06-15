import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import './HotCourses.css';
import co1 from '../../../images/courses/co1.png';
import co2 from '../../../images/courses/co2.png';
import co3 from '../../../images/courses/co3.png';
import co4 from '../../../images/courses/co4.png';
import co5 from '../../../images/courses/co5.png';
import co6 from '../../../images/courses/co6.png';

const HotCourses = () => {
    return (
        <div className="container">
            <div className="studyHead">
                    <h1>Hot Courses</h1>
            </div>
            <div className="courses">
                 <div className="courses">
                <a href="http://www.istudentz.com/business/"><img src={co1} alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/education/"><img src={co2} alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/engineering/"><img src={co3} alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/law/"><img src={co4} alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/medicine/"><img src={co5} alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/nursing/"><img src={co6} alt="" /></a>

                 </div>
           
            </div>
            
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
            
        </div>
    );
};

export default HotCourses;