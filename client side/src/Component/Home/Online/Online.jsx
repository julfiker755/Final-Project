import Subtitle from '../../Shared/Subtitle/Subtitle';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// import css
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Online = () => {
    return (
        <div className='my-[30px]'>
            <Subtitle heading="---From 11:00am to 10:00pm---"
                subheading={"ORDER ONLINE"}
            ></Subtitle>
            {/* slide */}
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000, // Delay between transitions in milliseconds
                    disableOnInteraction: false, // Continue autoplay after user interaction
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Online;