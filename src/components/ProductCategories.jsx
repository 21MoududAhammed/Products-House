import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCategories() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>Slide One</h3>
        </div>
        <div>
          <h3>Slide two</h3>
        </div>
        <div>
          <h3>Slide Three</h3>
        </div>
        <div>
          <h3>Slide Four</h3>
        </div>
        <div>
          <h3>Slide Five</h3>
        </div>
        <div>
          <h3>Slide Six</h3>
        </div>
      </Slider>
    </div>
  );
}


