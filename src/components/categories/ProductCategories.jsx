import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import Beauty from "./Beauty";
import Fragnance from "./Fragnance";
import MensShirt from "./MensShirt";
import MensShoes from "./MensShoes";
import Grocery from "./Grocery";
import Laptop from "./Laptop";
import SmartPhones from "./SmartPhones";
import Furniture from "./Furniture";


export default function ProductCategories() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
   const navigate = useNavigate();
  const goToTheDesireRoute = (category) =>{
    navigate(`/${category}`)
  }

  return (
    <section className="my-5 md:my-8">
      <h2 className="text-center text-2xl md:text-4xl  text-gray-800 dark:text-white font-bold font-serif mb-8">
        Product Categories
      </h2>

      <div className="slider-container ">
        <Slider {...settings}>
          {/* categories start  */}
          <Beauty goToTheDesireRoute={goToTheDesireRoute}/>
          <Fragnance goToTheDesireRoute={goToTheDesireRoute} />
          <MensShirt goToTheDesireRoute={goToTheDesireRoute}/>
          <MensShoes goToTheDesireRoute={goToTheDesireRoute}/>
          <Grocery goToTheDesireRoute={goToTheDesireRoute}/>
          <Laptop goToTheDesireRoute={goToTheDesireRoute}/>
          <SmartPhones goToTheDesireRoute={goToTheDesireRoute}/>
          <Furniture goToTheDesireRoute={goToTheDesireRoute}/>
          {/* categories end  */}
        </Slider>
      </div>
    </section>
  );
}
