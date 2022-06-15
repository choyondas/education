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
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import img1 from '../../../images/banner1.jpg';
import img2 from '../../../images/banner2.jpg';
import img3 from '../../../images/banner3.jpg';
const Banner = () => {
    return (
        
            
 <div className="banner">
            <Swiper
            effect={'fade'}
               autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
     
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        
      </Swiper>
    </div>


    
    );
};

export default Banner;