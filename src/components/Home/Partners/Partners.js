
import './Partners.css';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";




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
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/pte_i_wb_acad_r_rgb-120x80.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/acc-1-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/toefl-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/ets-120x80.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/british-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/idp-120x80.png" alt="" /></div></SwiperSlide>
        
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
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/avense-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/axisbank-logo-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/CaSkVn-WIAI6pOp-120x80.jpg" alt="" /></div></SwiperSlide>
       
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/hdfc-120x80.jpg" alt="" /></div></SwiperSlide>
        
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
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/forex-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/thmous-120x80.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="imgpart"><img src="http://www.istudentz.com/wp-content/uploads/2015/12/westernunion-logo-120x80.png" alt="" /></div></SwiperSlide>
        
        
      </Swiper>
    </>
                    </div>
                </div>
</div>
            </div>
       
    );
};

export default Partners;