import React, { useState } from "react";
// import contactUs from "../contactUs";
import { ViewListIcon, SearchIcon, HomeIcon, UserCircleIcon, MenuIcon } from '@heroicons/react/solid';

import {Route, Switch, Link} from 'react-router-dom';



import homeRoute from "../components/homeRoute/homeRoute";
import annapurnaHotel from "../components/hotelRoute/annapurnaHotel";


import boudhaHotel from "../components/hotelRoute/boudhaHotel";
import kathmanduHotel from "../components/hotelRoute/kathmanduHotel";
import signUp from "../components/LogInSignIn/signUp";


import logIn from "../components/LogInSignIn/logIn";

import favoritesList from "../components/yourFavorites/favoritesList";
import fishAndAquariums from "../components/fishAndAquarium/fishAndAquarium";
import parrotsAndBirds from "../components/parrotsAndBirds/birds";
import lostAndFoundPets from "../components/lostAndFound/lostAndFound";
import cats from "../components/cats/cats";
import dogs from "../components/dogs/allDogs";
import nearestVetnaries from "../components/hireVetnaries/hireVetnaries";
import allPets from "../components/searchAllPets/allPets";
import IndividualRoute from "../components/individualRouteUsingParams/individualRoute";




function App(){

            //  const {menuHandle, menuHandlePass}= useState(false);


            // const {menuItems,menuItemsPass}=useState("");



            // function menuClicked(){
            //     menuHandlePass="True";

            // }

            //     if (menuHandle==true){
            //         menuItemsPass= {
            //             logIn: "Log In",
            //             SignUp: "Sign Up",
            //             SignInGoogle: "Sign Up G+"
            //         }

            //         }else{
            //             menuHandle="false"
            //         }
            //     }
            






    return( 



        
       <>     

       <div >   
             

<div className="container max-w-full  rounded-md fixed  z-50  ">
<div className="flex justify-between items-center px-5 mb-5 shadow-lg rounded-xl  bg-gray-50 ">
    {/* Nav Bar Items */}


<div className="flex space-x-0 my-5 ">   
     <div>
         {/* Logo of app */}
        <Link to="/">
        <HomeIcon className="h-6 w-6 mt-3 rounded-xl text-gray-500 flex items-center  transform hover:scale-125 hover:bg-opacity-60 hover:text-opacity-70 hover:shadow-xl duration-150 " />
        </Link>
    </div>
        <Link to="/" className="ml-5  rounded-xl font-bold ">
            
            
        <span href="#" className="ml-2 ">Pets</span>  <br/> 
             <span href="#" className="ml-8 mr-6 " >Mandu</span>
        </Link>

        </div>


        
       
        

<div >
        {/* All Categories links */}
     <div className="flex flex-wrap justify-center items-center space-x-3 m-2">   
<div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/dogs"  > Dogs </Link>
        </div>
        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/cats" > Cats </Link>
        </div>
        
        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/fish_aquariums" > Fish/ Aquarium   </Link>
        </div>
        
        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/parrots_birds" > Parrots/ Birds </Link>
        </div>

        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/nearest_vetnaries" > Nearest Vetneries </Link>
        </div>
        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/lost_found_pets" > Lost & Found Pets </Link>
        </div>
        <div className=" rounded-xl p-1 shadow-md bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/favorites_list" > Your Favorites</Link>
        </div>
        </div>
</div>




<div className="hidden md:flex flex-1  justify-center items-center ">
            {/* Search Section */}
        <div className="flex justify-between items-center ">
            
            <div  className="transform hover:scale-105 duration-300 hover:shadow rounded-3xl  ">
                           {/* Search Icon */}
        <Link to="/all_pets" >
            <SearchIcon class="h-6 w-6 text-gray-500 absolute ml-52 mt-2.5 z-50  " />
           </ Link>
            <input className="text-center  border border-gray-50 shadow-md outline-none rounded-3xl flex-1 px-10 py-2 "  
            type="text" placeholder="Search any pet? " />

       
           

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

        <button  className="flex items-center focus:outline-none p-2 text-gray-600  "> <MenuIcon className="h-6 w-8  " /> 
        
        <UserCircleIcon className="h-8 w-8 text-gray-600" />
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





</div>        






        <div >
            {/*Header Page Routing */}
            {/* <Route path="/" exact content={Annapurna_hotel} />  */}
            <Switch>


            <Route path="/" exact  component={homeRoute} /> 
            <Route path="/hotelwebsite"  component={homeRoute} /> 
             
             <Route path="/Annapurna_hotel" component={annapurnaHotel} /> 

              <Route path="/boudha_hotel"    component={boudhaHotel} /> 
              <Route path="/kathmandu_hotel" component={kathmanduHotel} /> 

                <Route path="/sign_up" component={signUp} />
                <Route path="/log_in" component={logIn} />
                
                <Route path="/all_pets" component={allPets} />

                <Route path="/nearest_vetnaries" component={nearestVetnaries} />

                <Route path="/dogs" component={dogs} />

                <Route path="/cats" component={cats} />
                <Route path="/lost_found_pets" component={lostAndFoundPets} />
                <Route path="/fish_aquariums" component={fishAndAquariums} />
                <Route path="/parrots_birds" component={parrotsAndBirds} />
                <Route path="/favorites_list" component={favoritesList} />


                {/* individual pets page routing using params */}
                <Route path="/pets/:indexNumber" component={IndividualRoute} />




   </Switch>
   </div>





  {/* Footer */}
   <div>
    <div className="h-40  border border-gray-300 bg-gray-300 mt-10">     
            <div>
            {/* Contact Us Section */}
            <h1 className="font-bold text-4xl mt-5 text-center"> Contact Us   </h1>
            <p className="text-center m-5">Copyright <br/> Add Social Media Accounts</p>
            </div>


    {/* <link to={contactUs} className="flex justify-center border border-red-300 "> Contact Us</a> */}

    {/* <route path={contactUs}  /> */}

    </div>

        </div>

</>
    );

}

export default App;
