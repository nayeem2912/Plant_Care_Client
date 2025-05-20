import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerSlider = () => {
     const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div>
            <div className=' my-10 w-11/12   mx-auto '>
            <Slider {...settings}>
            
              <div className='px-4' ><img className='rounded-lg w-full h-96' src="/assets/slide-1.png" alt="" /></div>
              <div className='px-4'><img className='rounded-lg w-full h-96' src="/assets/slide-2.png" alt="" /></div>
              <div className='px-4'><img className='rounded-lg w-full h-96' src="/assets/slide-3.png" alt="" /></div>
              
            
            </Slider>
        </div>
        </div>
    );
};

export default BannerSlider;