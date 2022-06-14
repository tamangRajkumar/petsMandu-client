import React, { Component } from "react";
import Slider from "react-slick";
import allPets from "../AllPetsLists/allPetsList";
import sliderCss from "./sliderCss.css";

// export default class Responsive extends Component

const SliderCarousel = ({ title, autoplay, autoplaySpeed, pauseOnHover }) => {
  {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
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

    return (
      <>
        <h1 className="font-bold text-4xl mt-20 ml-40 ">{title}</h1>

        <div className="ml-20 mr-20 mt-5  bg-contain">
          <Slider {...settings}>
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
      </>
    );
  }
};

export default SliderCarousel;
