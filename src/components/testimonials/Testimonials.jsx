import React from 'react'
import './testimonials.css'
import Avatr1 from '../../assets/avatar1.jpg'
import Avatr2 from '../../assets/avatar2.jpg'
import Avatr3 from '../../assets/avatar3.jpg'
import Avatr4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
       >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatr1} alt="client image" />
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam veniam sunt est veritatis nam libero dicta molestias, voluptatem ipsa vitae natus iste, assumenda maiores! Eum adipisci deleniti repudiandae debitis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatr2} alt="client image" />
          </div>
          <h5 className='client_name'>Shatta Wale</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam veniam sunt est veritatis nam libero dicta molestias, voluptatem ipsa vitae natus iste, assumenda maiores! Eum adipisci deleniti repudiandae debitis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatr3} alt="client image" />
          </div>
          <h5 className='client_name'>Kwame Despite</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam veniam sunt est veritatis nam libero dicta molestias, voluptatem ipsa vitae natus iste, assumenda maiores! Eum adipisci deleniti repudiandae debitis!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatr4} alt="client image" />
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam veniam sunt est veritatis nam libero dicta molestias, voluptatem ipsa vitae natus iste, assumenda maiores! Eum adipisci deleniti repudiandae debitis!
          </small>
        </SwiperSlide>

      </Swiper >
    </section >
  )
}

export default Testimonials