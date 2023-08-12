import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create a CSS file for carousel styles
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="images/bad batch.jpg" alt="Movie 1" className="carousel-image"  />
        </div>
        <div>
          <img src="images/chuck.jpg"  alt="Movie 2" className="carousel-image" />
        </div>
        <div>
          <img src="images/the intesteller .jpg"  alt="Movie 5" className="carousel-image" />
        </div>
        <div>
          <img src="images/wednesday.jpg"  alt="Movie 6" className="carousel-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    );
  }
  export default Carousel;