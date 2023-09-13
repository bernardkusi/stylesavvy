import React, { useContext } from 'react'
import image from '../images/aboutimage.jpg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Context } from '../context/Appcontext';

const Gallery = () => {
    const {shoes} = useContext(Context)

    return (
        <div id="gallery">
            <div className="page">
                <h3 className="heading" style={{ textAlign: "left" }}>About Us</h3>
                <p className="subheading" style={{ textAlign: "left", color: "#fff" }}>Merging Fashion-forward Designs with Premium Materials</p>
                <div className="slider">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={12}
                        slidesPerView={(window.innerWidth) > 750 ? 3 : 1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}  
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {shoes && shoes.map((shoe,index) => {
                            if((index >=3) && (index<11)){
                                return(<SwiperSlide key={index}>
                                    <div className="swiperimage" style={{ height: "300px" }}>
                                        <img src={require(`../images/${shoe.image}.avif`)} alt="image" />
                                    </div>
                                </SwiperSlide>)
                            }
                            })}
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Gallery