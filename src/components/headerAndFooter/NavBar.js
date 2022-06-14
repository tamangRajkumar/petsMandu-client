import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  ViewListIcon,
  SearchIcon,
  HomeIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function NavBar() {
  return (
    <div className="container max-w-full  rounded-md fixed  z-50  ">
      <div className="flex justify-between items-center px-5 mb-5 shadow-lg rounded-xl  bg-gray-50 ">
        {/* Nav Bar Items */}
        <div className=" flex-column justify-center items-center space-x-0 my-5 ">
          <div className="flex justify-center items-center">
            {/* Logo of app */}
            <Link to="/">
              <HomeIcon className="h-6 w-6 mt-1.5 mr-1 rounded-xl text-gray-500 flex items-center justify-center  transform hover:scale-125 hover:bg-opacity-60 hover:text-opacity-70 hover:shadow-xl duration-150 " />
            </Link>
          </div>
          <div>
          <Link to="/" className=" mr-4  rounded-xl font-bold ">
            <span href="#" className="ml-2 ">
              pets<span className="text-xl">Mandu</span>
            </span>
          </Link>
          </div>
        </div>

        <div>
          {/* All Categories links */}
          <div className="flex flex-wrap justify-center items-center space-x-3 ml-8 py-7 mt-2">
            {/* <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/dogs"> Dogs </Link>
            </div>
            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/cats"> Cats </Link>
            </div>

            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/fish_aquariums"> Fish/ Aquarium </Link>
            </div>

            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/parrots_birds"> Parrots/ Birds </Link>
            </div> */}


            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/adopt_pets"> Adopt Pets </Link>
            </div> 

            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/pets_problems_and_solutions"> Pets Problems & Solutions </Link>
            </div> 


            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/nearest_vetnaries"> Nearest Vetneries </Link>
            </div>
            <div className=" rounded-xl py-2 px-3 font-bold text-base shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/lost_found_pets"> Lost & Found Pets </Link>
            </div>
            {/* <div className=" rounded-xl p-1 px-1.5 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
              <Link to="/favorites_list"> Favorites List</Link>
            </div> */}
          </div>
        </div>

        <div className="hidden md:flex flex-1  justify-center items-center ">
          {/* Search Section */}
          <div className="flex justify-between items-center ">
            <div className="transform hover:scale-105 duration-300 hover:shadow rounded-3xl  ">
              {/* Search Icon */}
              <Link to="/all_pets">
                <SearchIcon class="h-6 w-6 text-gray-500 absolute ml-52 mt-2.5 z-50  " />
              </Link>
              <input
                className="text-center  border border-gray-50 shadow-md outline-none rounded-3xl flex-1 px-10 py-2 "
                type="text"
                placeholder="Search any pet? "
              />
            </div>
          </div>
        </div>

        {/* <div className="flex items-center space-x-4 hidden md:hidden lg:flex"> */}
        {/* Log in & Sign up menu */}

        {/* <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/log_in" > Log In </Link>
        </div>
        <div className="rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:bg-opacity-10 hover:shadow-xl duration-150 ">
            <Link to="sign_up"> Sign Up </Link>
        </div>        
         */}

        {/* <div className=" rounded-xl p-2 shadow-xl bg-yellow-300 transform hover:scale-110  hover:shadow-xl duration-150">
            <a href="#"> Sign Up with G+ </a>
        </div> */}

        {/* </div> */}

        <div className=" bg-white rounded-full shadow-lg  transform hover:scale-105 duration-150 hover:shadow-xl ">
          {/* Nav Bar Toggler */}

          <button className="flex items-center focus:outline-none p-2 text-gray-600 ">
            <Link
              to="/signUp"
              className="text-gray-600 flex justify-center items-center"
            >
              <MenuIcon className="h-6 w-8  " />
              <UserCircleIcon className="h-8 w-8 text-gray-600" />
            </Link>
          </button>
          {/* //onClick={menuClicked} */}
        </div>

        {/* <div>
            <h1>{menuItems.logIn}</h1>
           <h1> {menuItems.SignUp}</h1>
           <h1> {menuItems.SignUpGoogle}</h1>
        </div>  */}
      </div>
    </div>
  );
}

export default NavBar;
