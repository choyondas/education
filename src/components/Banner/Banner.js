import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


const Banner = () => {
    return (
        
            
 <div className="banner">
            <Swiper
            effect={'fade'}
              
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
     
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="//www.istudentz.com/wp-content/uploads/2017/09/Edu.-not-just-Degree-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="//www.istudentz.com/wp-content/uploads/2017/09/Right-Carrer.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="//www.istudentz.com/wp-content/uploads/2017/09/Thinking_girl-3.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </div>


    
    );
};

export default Banner;