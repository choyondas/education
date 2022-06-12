


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './MiddleAdd.css';

const MiddleAdd = () => {
    
    return (

        
         <div className="container middleAdd">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.youtube.com/vi/0WNORcEMIno/hqdefault.jpg" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://img.youtube.com/vi/dc4Bj0COSSc/hqdefault.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.youtube.com/vi/O0UkE_c3J9I/maxresdefault.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.youtube.com/vi/TQSJWQYZdho/maxresdefault.jpg" alt="" /></SwiperSlide>
        
      
      </Swiper>
    </div>
    );
};

export default MiddleAdd;