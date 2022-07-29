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
    const postId = post._id;
    history.push(`/user/viewpost/${postId}`);
  };

  const [adoptPetsPosts, setAdoptPetsPosts] = useState();
  // const [petsProblemsAndSolutions, setPetsProblemsAndSolutions] = useState();
  const [nearestVetneriesPetsPosts, setNearestVetneriesPetsPosts] = useState();
  const [lostAndFoundPetsPosts, setLostAndFoundPetsPosts] = useState();

  useEffect(() => {
    fetchAdoptPetsPosts("adopt_pets");
    // fetchPetsProblemsAndSolutions("pets_problems_and_solutions");
    fetchNearestVetneriesPosts("nearest_vetneries");
    fetchLostAndFoundPetsPosts("lost_and_found");

    // fetchLostAndFoundPetsPosts();
  }, []);

  // Fetch Adopt pets data
  const fetchAdoptPetsPosts = async (category) => {
    try {
      // console.log(category);

      const { data } = await fetchPostsByCategory(category);
      // console.log(data.category);

      // setPosts(data);
      setAdoptPetsPosts(data.posts);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  // Fetch Pets Problems and solutions data
  // const fetchPetsProblemsAndSolutions = async (category) => {
  //   try {
  //     const { data } = await fetchPostsByCategory(category);
  //     // console.log(data.category);

  //     // setPosts(data);
  //     setPetsProblemsAndSolutions(data);
  //   } catch (error) {
  //     console.log("Error => ", error);
  //   }
  // };

  // Fetch Nearest vetneries  data
  const fetchNearestVetneriesPosts = async (category) => {
    try {
      const { data } = await fetchPostsByCategory(category);
      // console.log(data.category);

      // setPosts(data);
      setNearestVetneriesPetsPosts(data.posts);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  // Fetch Lost and found pets  data
  const fetchLostAndFoundPetsPosts = async (category) => {
    try {
      const { data } = await fetchPostsByCategory(category);
      // console.log(data.category);

      // setPosts(data);
      setLostAndFoundPetsPosts(data.posts);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  // posts.adoptPets && console.log(posts.petsProblemsAndSolutions);
  // posts.adoptPets.length>0 && console.log(posts.adoptPets);
  // petsProblemsAndSolutions && console.log(petsProblemsAndSolutions);

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
          posts={adoptPetsPosts}
        />
      </div>

      {/* Adopt Pets */}
      {adoptPetsPosts && (
        <div>
          <SliderCarousel
            title={"Adop Pets"}
            handlePostRouteIndividual={handlePostRouteIndividual}
            posts={adoptPetsPosts}
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
      {lostAndFoundPetsPosts && (
        <div>
          <SliderCarousel
            title={"Lost and Found Pets"}
            handlePostRouteIndividual={handlePostRouteIndividual}
            posts={nearestVetneriesPetsPosts  }
          />
        </div>
      )}

      {/* Find Vetneries */}

      {nearestVetneriesPetsPosts && (
        <div>
          <SliderCarousel
            title={"Find Vetneries"}
            handlePostRouteIndividual={handlePostRouteIndividual}
            posts={nearestVetneriesPetsPosts}
          />
        </div>
      )}

      {/*      
      <div>
        <div>
          {/* List Of All Pets */}
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
