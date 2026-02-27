import React from 'react'
import Image from 'next/image'
// import { SwiperCore, Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Navigation, Pagination]);

//to-do: починить слайдер

const Slider = () => {
  return (
    <section id="slider">
        <div className="container">
            <h2>Загрузка</h2>

            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Image src="/images/sliderImages/slide1.webp" 
                        alt="Слайд 1" 
                        width="600" 
                        height={300} 
                        className='img'/>
                    </div>
                    <div className="swiper-slide">
                        <Image src="/images/sliderImages/slide2.webp" 
                        alt="Слайд 2" 
                        width="600"  
                        height={300} 
                        className='img'/>
                    </div>
                    <div className="swiper-slide">
                        <Image src="/images/sliderImages/slide3.webp" 
                        alt="Слайд 3" 
                        width="600"  
                        height={300} 
                        className='img'/>
                    </div>
                </div>

                <div className="swiper-button-prev" tabIndex="0"></div>
                <div className="swiper-button-next" tabIndex="0"></div>
            </div>
        </div>
    </section>
  )
}

export default Slider