import React from 'react';
import './TrendingTopics.css';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiArrowSmRight} from 'react-icons/hi';

const TrendingTopics = () => {
    return (
        <div className="container">
            <div className="studyHead">
                    <h1>Trending Topics</h1>
            </div>

            <div className="topicsRow">
                <div className="topicsCol">
                    <div className="topicsContent">


                        <div className="contentImg">
                              <a href="http://www.istudentz.com/university-shortlisting-tips/" target="_blank">
                            <img src="https://st3.depositphotos.com/1350793/14320/i/600/depositphotos_143200347-stock-photo-study-abroad-text-with-woman.jpg" alt="" />
                            <span>
                                <AiOutlinePlus style={{ top: 60 ,left: 90 }} />

                            </span>
                        </a>
                      </div>
                        
                        <br />
                        <div className="bar">

                        </div>
                        
                        <h3>3 Mistakes Students Make When Choosing a University Abroad</h3>
                        
                        <small className="topicClock"><span><AiOutlineClockCircle/></span> February 2, 2022</small>
                    </div>
                </div>
                <div className="topicsCol">
                    <div className="topicsContent">
                         <div className="contentImg">
                              <a href="http://www.istudentz.com/university-shortlisting-tips/" target="_blank">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNh7EESiwFdEu9yGcbJP-7r9gin0fC08MIGA&usqp=CAU" alt="" />
                            <span>
                                <AiOutlinePlus style={{ top: 60 ,left: 90 }} />

                            </span>
                        </a>
                      </div>


                       
                        
                        <br />
                        <div className="bar">

                        </div>
                        
                        <h3>How to Do Postgraduate Medical Education in the USA</h3>
                        
                        <small className="topicClock"><span><AiOutlineClockCircle/></span> February 2, 2022</small>
                    </div>
                </div>
                <div className="topicsCol">
                    <div className="topicsContent">
                         <div className="contentImg">
                              <a href="http://www.istudentz.com/university-shortlisting-tips/" target="_blank">
                            <img src="https://i.pinimg.com/originals/79/f0/70/79f0703cc8d54d40a9018a4a764a8d6a.jpg" alt="" />
                            <span>
                                <AiOutlinePlus style={{ top: 60 ,left: 90 }} />

                            </span>
                        </a>
                      </div>


                        <br />
                        <div className="bar">

                        </div>
                        
                        <h3>Arkansas State University( USA )-Spot Admissions</h3>
                        
                        <small className="topicClock"><span><AiOutlineClockCircle/></span> February 2, 2022</small>
                    </div>
                </div>
                <div className="topicsCol">
                    <div className="topicsContent">
                         <div className="contentImg">
                              <a href="http://www.istudentz.com/university-shortlisting-tips/" target="_blank">
                            <img src="https://www.studyoverseashelp.com/blog/wp-content/uploads/2021/08/study-in-new-zealand.jpg" alt="" />
                            <span>
                                <AiOutlinePlus style={{ top: 60 ,left: 90 }} />

                            </span>
                        </a>
                      </div>


                        
                        <br />
                        <div className="bar">

                        </div>
                        
                        <h3>Top 10 Universities to Study in The New Zealand</h3>
                        
                        <small className="topicClock"><span><AiOutlineClockCircle/></span> February 2, 2022</small>
                    </div>
                </div>
               
            </div>
            <br />
            <br />


             <div  className=" explore">
            
            <div className=" exploreItem">
               <a href="http://www.istudentz.com/#
               " target="_blank"> <h3>
                    More Latest Update...
                </h3></a>
                <button>
                    <a href="http://www.istudentz.com/testimonials-page/">
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

export default TrendingTopics;