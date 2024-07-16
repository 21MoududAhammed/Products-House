import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import beauty from "../assets/categories/Beauty.png";
import grocery from "../assets/categories/grocery.jpg";
import fragnance from "../assets/categories/fragnance.jpg";
import mensShoes from "../assets/categories/menShoes.jpg";
import mensShirt from "../assets/categories/mensShirt.jpg";
import laptop from "../assets/categories/laptop.jpg";

export default function ProductCategories() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1540,
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

  return (
    <section className="my-10">
      <h2 className="text-center text-2xl md:text-4xl  text-gray-800 dark:text-white font-bold font-serif mb-8">
        Product Categories
      </h2>

      <div className="slider-container ">
        <Slider {...settings}>
          {/* Beauty start */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56">
              <img
                className="w-full h-full object-cover "
                src={beauty}
                alt="Beauty"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Beauty
              </h3>
            </div>
          </div>
          {/* Beauty end  */}

          {/* fragnance start  */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56">
              <img
                className="w-full h-full object-cover "
                src={fragnance}
                alt="fragnance"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Fragnance
              </h3>
            </div>
          </div>
          {/* fragnance end  */}

          {/* mens-shirt start  */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56 px-10">
              <img
                className="w-full h-full  "
                src={mensShirt}
                alt="mens-shirt"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Mens Shirts
              </h3>
            </div>
          </div>
          {/* mens-shirt end  */}

          {/* mens-shirt start  */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56 px-10">
              <img
                className="w-full h-full  "
                src={mensShoes}
                alt="mens-shoes"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Mens Shoes
              </h3>
            </div>
          </div>
          {/* mens-shirt end  */}

          {/* grocery start  */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56">
              <img
                className="w-full h-full object-cover "
                src={grocery}
                alt="grocery"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Grocery
              </h3>
            </div>
          </div>
          {/* grocery end  */}

          {/* Laptop start  */}
          <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className=" h-56">
              <img
                className="w-full h-full object-cover "
                src={laptop}
                alt="laptop"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
                Laptop
              </h3>
            </div>
          </div>
          {/* Laptop end  */}
        </Slider>
      </div>
    </section>
  );
}
