import React from 'react';
import Explore from '../Explore/Explore';
import './StudyDestination.css';


import des1 from '../../../images/destination/des1.png';
import des2 from '../../../images/destination/des2.png';
import des3 from '../../../images/destination/des3.png';
import des4 from '../../../images/destination/des4.png';
import des5 from '../../../images/destination/des5.png';
import des6 from '../../../images/destination/des6.png';
import troy from '../../../images/destination/troy.gif';

const StudyDestination = () => {
    return (
        <div className="studyDiv">
             <div className="container ">
                <div className="studyHead">
                    <h1>Top Study Abroad Destinations</h1>
                </div>
                <div className="studyBox">
                    <div className="studyCard">
                        <img src={des1} alt="" />
                        <h2>USA</h2>
                        <p>The USA has the world’s largest international student population, with nearly 7,00,000 students choosing to broaden their education. <span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                    </div>
                    <div className="studyCard">
                        <img src={des2} alt="" />
                        <h2>Canada</h2>
                        <p>Canada is a hot-choice for the student aspirants nowadays. Canadian Educational system is famous for its quality and world-wide. <span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                    </div>
                    <div className="studyCard">
                        <img src={des3} alt="" />
                        <h2>Australia</h2>
                        <p>In Australia, you have the freedom to choose a path that suits your particular goals. There are thousands of courses on offer.<span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                    </div>
                    <div className="studyCard">
                        <img src={des4} alt="" />
                        <h2>Ireland</h2>
                        <p>Ireland’s worldwide reputation for high quality education is build on the solid foundation  of commitment to excellence <span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                    </div>
                    <div className="studyCard">
                        <img src={des5} alt="" />
                        <h2>New Zealand</h2>
                        <p>The USA has the world’s largest international student population, with nearly 7,00,000 students choosing to broaden their education. <span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                    </div>
                    <div className="studyCard">
                        <img src={des6} alt="" />
                        <h2>Germany</h2>
                        <p>The Germany has the world’s largest international student population, with nearly 7,00,000 students choosing to broaden their education. <span> <a href="http://www.istudentz.com/study-in-usa/"><span>More...</span></a> </span></p>


                        <button>
                            <a href="http://www.istudentz.com/" target="_blank">Need Help?</a>
                        </button>
                   </div>

                </div>
                <br />
                <br />
                <br />


                <Explore />
                 <div className="addExplore">
                  <a href="http://www.istudentz.com/profile-evaluation-form/">
                <img src={troy} alt="" />
            </a>
          </div>
        </div>
       </div>
    );
};

export default StudyDestination;