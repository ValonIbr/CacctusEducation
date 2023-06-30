
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fig from "../images/cac1.gif"
import { EffectFade, Navigation, Pagination } from "swiper";
import './Slider.css'
const Slider = () => {

  
  return (
    <> <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
   
      <img src={fig} />
         
    </SwiperSlide>
    
  </Swiper>
      </>
);
}

export default Slider
