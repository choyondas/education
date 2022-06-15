
import './Partners.css';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";


//import necessary images

import pa1 from '../../../images/partners/pa1.jpg';
import pa2 from '../../../images/partners/pa2.jpg';
import pa3 from '../../../images/partners/pa3.png';
import pa4 from '../../../images/partners/pa4.jpg';
import pa5 from '../../../images/partners/pa5.png';
import pa6 from '../../../images/partners/pa6.png';


import ep1  from '../../../images/partners/ep1.jpg';
import ep2  from '../../../images/partners/ep2.jpg';
import ep3  from '../../../images/partners/ep3.jpg';
import ep4 from '../../../images/partners/ep4.jpg';


import fo1  from '../../../images/partners/fo1.jpg';
import fo2  from '../../../images/partners/fo2.jpg';
import fo3  from '../../../images/partners/fo3.png';




const Partners = () => {
    return (
        <div className="container ">
        <div className="partners">
          
            {/*------------------------------
                   partner-1 section 
            --------------------------------*/}

            <div className="partners1">
                
                    <div className="partnerItem">
                        <h3>Accreditation</h3>
                         <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
                                loop={true}
                            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="imgpart"><img src={pa1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={pa2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={pa3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={pa4}alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={pa5} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={pa6} alt="" /></div></SwiperSlide>
        
      </Swiper>
                    </>
                    

             {/*------------------------------
                   partner-2 section 
            --------------------------------*/}
                    </div>
                </div>
            <div className="partners2">
                
                    <div className="partnerItem">
                        <h3>Loan Partners</h3>
                         <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
                                loop={true}
                            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="imgpart"><img src={ep1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={ep2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={ep3} alt="" /></div></SwiperSlide>
       
        <SwiperSlide><div className="imgpart"><img src={ep4} alt="" /></div></SwiperSlide>
        
      </Swiper>
    </>
                    </div>
            </div>
            


             {/*------------------------------
                   partner-3 section 
            --------------------------------*/}

            <div className="partners3">
                
                    <div className="partnerItem">
                        <h3>Forex Partners</h3>
                         <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
                                loop={true}
                            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="imgpart"><img src={fo1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={fo2}  alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src={fo3}  alt="" /></div></SwiperSlide>
        
        
      </Swiper>
    </>
                    </div>
                </div>
</div>
            </div>
       
    );
};

export default Partners;