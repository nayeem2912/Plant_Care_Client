import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const BannerSlider = () => {
    

    return (
       
        <Carousel  autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>
                <div >
                    <img className='h-[500px]' src="/assets/slide-1.png" />
                    
                </div>
                <div>
                    <img className='h-[500px]' src="/assets/slide-2.png" />
                    
                </div>
                <div>
                    <img className='h-[500px]' src="/assets/slide-3.png" />
                   
                </div>
            </Carousel>
    );
};

export default BannerSlider;