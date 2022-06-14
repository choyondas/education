import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import {Autoplay,  Navigation, Pagination } from "swiper";
import { HiArrowSmRight } from 'react-icons/hi';
import './Visa.css'
const Visa = () => {
    return (
        <div className="container">
             <div className="studyHead">
                <h1>Latest Visa Approval</h1>
            </div>
       <>
                <Swiper
                    

             
        slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // freeMode={true}
                    navigation={true}
                    
                    
                    loop={true}        
                    
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper visaGrid"
        
                     breakpoints={{
    // when window width is >= 640px
    240: {
      width: 440,
      slidesPerView: 1,
    },
    640: {
      width: 560,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    1200: {
      width: 1100,
      slidesPerView: 3,
    },
  }}
      >
        <SwiperSlide>
             <div className="visaInfo">
                            <div className="visaImg">
                            <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Syed-Fasiuddin-Photo-100x100.jpg" alt="" />  
                            </div>  
                            <div className="visaContent">
                                <h3>Nikhil Reddy</h3>
                                <h4>Northwest Missouri State University</h4>
                                <p>
                                    Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                                    <br />
                                    
                                    I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                                </p>
                           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="visaInfo">
                    <div className="visaImg">
                        <img src="http://www.istudentz.com/wp-content/uploads/2018/08/Sri-Venkata-Jayaramu-VISA_001-100x100.png" alt="" />  
                    </div>  
                    <div className="visaContent">
                            <h3>Joynal Shek</h3>
                            <h4>Northwest Missouri State University</h4>
                            <p>
                             Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                             <br />
                                    
                            I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                            </p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="visaInfo">
                            <div className="visaImg">
                            <img src="	http://www.istudentz.com/wp-content/uploads/2018/07/Sandeep-Kanna-Photo-100x100.jpg" alt="" />  
                            </div>  
                            <div className="visaContent">
                                <h3>Shiva Roop</h3>
                                <h4>Northwest Missouri State University</h4>
                                <p>
                                    Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                                    <br />
                                    
                                    I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                                </p>
                           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="visaInfo">
                            <div className="visaImg">
                            <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Nikhil-Reddy-Photo-100x100.jpg" alt="" />  
                            </div>  
                            <div className="visaContent">
                                <h3>Shiva Roop</h3>
                                <h4>Northwest Missouri State University</h4>
                                <p>
                                    Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                                    <br />
                                    
                                    I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                                </p>
                           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="visaInfo">
                            <div className="visaImg">
                            <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Shiva-Roop-Photo-100x100.jpg
" alt="" />  
                            </div>  
                            <div className="visaContent">
                                <h3>Shiva Roop</h3>
                                <h4>Northwest Missouri State University</h4>
                                <p>
                                    Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                                    <br />
                                    
                                    I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                                </p>
                           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="visaInfo">
                            <div className="visaImg">
                            <img src="http://www.istudentz.com/wp-content/uploads/2018/07/Sai-Teja-Penugonda-Photo-100x100.jpg" alt="" />  
                            </div>  
                            <div className="visaContent">
                                <h3>Shiva Roop</h3>
                                <h4>Northwest Missouri State University</h4>
                                <p>
                                    Study in Cyprus | Cyprus visa Success | Cyprus Student visa Experts–
                                    <br />
                                    
                                    I don’t have any words to thank I-Studentz Team, they are now like family to me as they are so friendly and available all the time during my process and they made it so simple to me and I didn’t feel the pressure, the Mock session of visa interview really developed me interpersonally as well. I thank you all from bottom of my heart.
                                </p>
                           </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
            </>
            <br />
            <br />

             <div  className=" explore">
            
            <div className=" exploreItem">
               <a href="http://www.istudentz.com/#
               "> <h3>
                    More Success Stories...
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

export default Visa;