

import type { LayoutElementProperties } from "@vertigis/web/components";
import { useWatchAndRerender } from "@vertigis/web/ui";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type ImageSliderModel from "./ImageSliderModel";

// Import custom styles
import './ImageSlider.css';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type ImageSliderProps = LayoutElementProperties<ImageSliderModel>;

const ImageSlider: React.FC<ImageSliderProps> = (props) => {
    useWatchAndRerender(() => [props.model.slides]);

    return (
        <div className="image-slider-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-container"
            >
                {props.model.slides.map((slide, index) => (
                    <SwiperSlide key={slide.url}>
                        <div className="slide-content">
                            <h3 className="slide-title">{slide.title}</h3>
                            <img src={slide.url} alt={slide.title} className="slider-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;