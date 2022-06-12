import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import './HotCourses.css';
const HotCourses = () => {
    return (
        <div className="container">
            <div className="studyHead">
                    <h1>Hot Courses</h1>
            </div>
            <div className="courses">
                 <div className="courses">
                <a href="http://www.istudentz.com/business/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/business-150x130.png" alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/education/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/Education-150x130.png" alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/engineering/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/engineering-150x130.png" alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/law/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/LAW-150x130.png" alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/medicine/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/medicine-150x130.png" alt="" /></a>

                 </div>
                 <div className="courses">
                <a href="http://www.istudentz.com/nursing/"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/nursing-150x130.png" alt="" /></a>

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