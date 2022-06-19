import React from "react";
import allPetsLists from "../../components/AllPetsLists/allPetsList";

import Cards from "../../components/Cards";
import petsGroupImg from "./petsGroupImg.jpg";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  HeartIcon,
  apptarIcon,
} from "@heroicons/react/solid";
// import ourFeatured from "../ourFeatured";
// import {useHistory} from 'react-router-dom';

import { Link, Redirect } from "react-router-dom";
import SliderCarousel from "../../components/sliderCarousel/SliderCarousel";
import { useSelector } from "react-redux";

function HomeRoute() {
  // const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );
  console.log(isAuthenticated);

  return (
    <>
      <div>
        {/* Image Carousel */}
        {/* <input className="text-center mt-3 border border-gray-300 rounded-2xl px-20 "  type="text" placeholder="Hotel Name? " />   */}
        <div className="flex   justify-center items-center ">
          {/* <ChevronDoubleLeftIcon className="w-20 h-20 text-gray-500 cursor-pointer"/>    */}

          <div className="mx-20  mt-20  ">
            {" "}
            //hover:shadow-2xl rounded-3xl
            <div>

            {/* Sign to post button */}
              {isAuthenticated ? (
                <></>
              ) : (
                <button className="absolute right-20 md:right-40 mt-80 animate-spin outline-none   rounded-2xl bg-blue-300 px-2 pb-1  hover:bg-black transform hover:scale-110  hover:border-gray-700 duration-150">
                  <Link
                    to="/signUp"
                    className="text-xl px-5 text-black font-bold hover:text-gray-200 outline-none"
                  >
                    Sign Up to Post
                  </Link>
                </button>
              )}
            </div>
            <img src={petsGroupImg} alt="" className=" h-96   rounded-3xl " />
          </div>

          {/* <ChevronDoubleRightIcon className="text-gray-500 w-20 h-20  cursor-pointer" />   */}
        </div>
      </div>

      <div>
        <SliderCarousel
          title={"Our Featured Posts"}
          autoplay={true}
          autoplaySpeed={6000}
          pauseOnHover={true}
        />
      </div>

      <div>
        <SliderCarousel title={"Adop Pets"} />
      </div>

      <div>
        <SliderCarousel title={"Find Vetneries"} />
      </div>

      <div>
        <SliderCarousel title={"Lost and Found Pets"} />
      </div>

      {/*      

      <div>
        <div>
          {/* List Of All Hotels */}
      {/* <h1 className="font-bold text-4xl mt-10 ml-20"> */}

      {/* Toys And Peripherals */}
      {/* </h1>

          <div className="flex text-center justify-center ">
            {/* Body List of hotels */}

      {/* {allPetsLists.map(function (lists) {
              return (
                <Cards
                  key={lists.id}
                  name={lists.name}
                  img={lists.imgURL}
                  place={lists.place}
                  rating={lists.rating}
                  cost={lists.cost}
                  href={lists.forHref}
                />
              );
            })}
          </div>
        </div>
      </div>  */}
    </>
  );
}
export default HomeRoute;
