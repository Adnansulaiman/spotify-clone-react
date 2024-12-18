import React from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";


const CardList = ({card}) => {
  return (
    <>
    
  <div className=" flex jutify-content-center items-center "> 
    <Swiper
      slidesPerView="auto"
      spaceBetween={15}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      // style={{ width: '100%' }}
    >
      {[1, 2, 3, 4,5].map((_, i) => (
        <SwiperSlide key={i} 
        style={{ width: '208px' }}
        >
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
    
  </div>
    </>
  )
}

export default CardList
