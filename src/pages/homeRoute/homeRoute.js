import React, { useState, useEffect } from "react";
import allPetsLists from "../../components/AllPetsLists/allPetsList";

import Cards from "../../components/Cards";
import { petsGroupImg, puppyGroupImg } from "../../assets/images";
import { fetchPostsByCategory } from "../../api";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  HeartIcon,
  apptarIcon,
} from "@heroicons/react/solid";
// import ourFeatured from "../ourFeatured";
import { useHistory } from "react-router-dom";

import { Link, Redirect } from "react-router-dom";
import SliderCarousel from "../../components/sliderCarousel/SliderCarousel";
import { useSelector } from "react-redux";

function HomeRoute() {
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );
  // console.log(isAuthenticated);

  // Handle Post Route to indicidual post page on click
  const handlePostRouteIndividual = (post) => {
    const postId = post.id;
    history.push(`/user/viewpost/${postId}`);
  };

  const [posts, setPosts] = useState({
    adoptPets: [],
    petsProblemsAndSolutions: [],
    nearestVetneriesPets: [],
    lostAndFoundPets: [],
  });

  useEffect(() => {
    getPostsByCategory("adopt_pets");
    getPostsByCategory("pets_problems_and_solutions");
    getPostsByCategory("nearest_vetneries");
    getPostsByCategory("lost_and_found");

    // fetchPetsProblemsAndSolutionsPetsPosts();
    // fetchNearestVetneriesPetsPosts();
    // fetchLostAndFoundPetsPosts();
  }, []);

  // Fetch Adopt pets data
  const getPostsByCategory = async (category) => {
    try {
      // console.log(category);

      const { data } = await fetchPostsByCategory(category);
      console.log(data.posts);

      // setPosts(data);
      switch (data.category) {
        case "adopt_pets":
          setPosts({ ...posts, adoptPets: data.posts });
        case "pets_problems_and_solutions":
          setPosts({ ...posts, petsProblemsAndSolutions: data.posts });
        case "nearest_vetneries":
          setPosts({ ...posts, nearest_vetneries: data.posts });
        case "lost_and_found":
          setPosts({ ...posts, lost_and_found: data.posts });
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  // posts.adoptPets && console.log(posts.petsProblemsAndSolutions);

  return (
    <>
      <div>
        {/* Image Carousel */}
        {/* <input className="text-center mt-3 border border-gray-300 rounded-2xl px-20 "  type="text" placeholder="Hotel Name? " />   */}
        <div className="flex   justify-center items-center ">
          {/* <ChevronDoubleLeftIcon className="w-20 h-20 text-gray-500 cursor-pointer"/>    */}

          <div className="mx-20    ">
            {/* hover:shadow-2xl rounded-3xl */}
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

      {/* Featured Posts */}
      <div>
        <SliderCarousel
          title={"Our Featured Posts"}
          autoplay={true}
          autoplaySpeed={6000}
          pauseOnHover={true}
          handlePostRouteIndividual={handlePostRouteIndividual}
        />
      </div>

      {/* Adopt Pets */}
      {posts.adoptPets.length > 0 && (
        <div>
          <SliderCarousel
            title={"Adop Pets"}
            handlePostRouteIndividual={handlePostRouteIndividual}
            adoptPets={posts.adoptPets}
          />
        </div>
      )}

      {/* About petsMandu */}
      <div className=" flex my-28 py-20  bg-gray-200 shadow-md px-20   ">
        <img
          className="h-96 w-auto rounded-xl  shadow-xl "
          src={puppyGroupImg}
          alt=""
        ></img>

        <div className="flex justify-center items-center ml-10  ">
          <div>
            <p className="text-3xl font-bold my-5   "> About petsMandu</p>
            <p className="text-lg font-medium text-justify">
              petsMandu is an online plateform for those who wants to post lost
              and found pets, find nearest vetnery, and share pets related
              problems and answer other people pets problems
            </p>
          </div>
        </div>
      </div>

      {/* Lost and found pets */}
      {/* <div>
        <SliderCarousel
          title={"Lost and Found Pets"}
          handlePostRouteIndividual={handlePostRouteIndividual}
        />
      </div> */}

      {/* Find Vetneries */}
      {/* <div>
        <SliderCarousel
          title={"Find Vetneries"}
          handlePostRouteIndividual={handlePostRouteIndividual}
        />
      </div> */}

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
