import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import allPets from "../AllPetsLists/allPetsList";
import sliderCss from "./sliderCss.css";

import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
// export default class Responsive extends Component

const SliderCarousel = ({ title, autoplay, autoplaySpeed, pauseOnHover }) => {
  {
    
    var  settings = {
      
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      pauseOnHover: pauseOnHover,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const sliderRef = useRef();

    // console.log(sliderRef);
    // console.log(sliderRef.current);
    // console.log(sliderRef.current.slickNext)
    // console.log(sliderRef.current.slickPlay);

   

    return (
      <>
        <div className="mt-12">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-4xl ml-40 ">{title}</h1>
            <div className="flex space-x-2 absolute right-32 justify-around items-center  cursor-pointer">
              <div onClick={() => sliderRef.current.slickPrev()}>
                {/* <p className="">Prev</p> */}
                <ArrowCircleLeftIcon className="h-10 w-10 text-gray-500 hover:text-gray-700 transform hover:scale-105" />
              </div>
              <div onClick={() => sliderRef.current.slickNext()}>
                {/* <p>Next</p> */}
                <ArrowCircleRightIcon className="h-10 w-10 m text-gray-500 hover:text-gray-700 transform hover:scale-105 " />
              </div>
            </div>
          </div>

          {/* Mapping data in slider */}
          <div className="ml-20 mr-20 mt-5  bg-contain">
            <Slider  {...settings} ref={sliderRef}   >
              {allPets.map((i) => {
                return (
                  <>
                    <div key={i} className="mr-5 ml-5">
                      <img src={i.imgURL} alt={i.name} />
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </>
    );
  }
};

export default SliderCarousel;
