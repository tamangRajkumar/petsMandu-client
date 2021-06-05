import React from "react";
// import contactUs from "../contactUs";
import { ViewListIcon, SearchIcon, HomeIcon } from '@heroicons/react/solid';

import {Route, Switch, Link} from 'react-router-dom';




import homeRoute from "../components/homeRoute/homeRoute";

 import annapurnaHotel from "../components/hotelRoute/annapurnaHotel";

import boudhaHotel from "../components/hotelRoute/boudhaHotel";
import kathmanduHotel from "../components/hotelRoute/kathmanduHotel";
import signUp from "../components/signUp";





function App(){





    return( 
        
       <>     

       <div >   
             

<div className="container max-w-full  rounded-md fixed  z-50  ">
<div className="flex justify-between items-center mx-10 px-10 mb-5 shadow-lg rounded-xl  bg-gray-50 ">
    {/* Nav Bar Items */}


<div className="flex space-x-0 my-5 ">   
     <div>
         {/* Logo of app */}
        <Link to="/">
        <HomeIcon className="h-6 w-6 mt-3 text-gray-500 transform hover:scale-125 hover:bg-opacity-60 hover:text-opacity-70 hover:shadow-xl duration-150 " />
        </Link>
    </div>
        <Link to="/" className="ml-5  rounded-xl font-bold ">
            
            
        <span href="#" className="ml-2">Hamro</span>  <br/>  
        
             <span href="#" className="ml-8 mr-6" >Hotel</span>
        </Link>

        </div>


        
        <div className="hidden md:flex flex-1  justify-center items-center">
            {/* Search Section */}
        <div className="flex justify-between items-center ">
            <input className="text-center  mr-3 border  outline-none  border-gray-300 rounded-3xl py-2 "  type="text" placeholder="Location?" />

            <input className="text-center  border border-gray-300 outline-none rounded-3xl flex-1 px-10 py-2 "  type="text" placeholder="Hotel Name? " />

            
        

        <div>
            {/* Search Icon */}
        <button>
            <SearchIcon class="h-6 w-6 ml-2 mt-4 text-gray-500 transform hover:scale-125 duration-150" />
            </button>
            </div>

        </div>
        </div>




       
        <div className="flex items-center space-x-4 hidden md:hidden lg:flex">
            {/* Log in & Sign up menu */}

        <div className="border border-gray-500 rounded-md p-1 bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150">
            <Link to="/log_in" > Log In </Link>
        </div>
        <div className="border border-yellow-500 rounded-md p-1 bg-gradient-to-r from-purple-300 to-purple-400 transform hover:scale-110 hover:bg-opacity-10 hover:shadow-xl duration-150 ">
            <Link to="sign_up"> Sign Up </Link>
        </div>        
        
            

          
            <div className="border border-yellow-400 rounded-md p-2 bg-yellow-300 transform hover:scale-110  hover:shadow-xl duration-150">
            <a href="#"> Sign Up with G+ </a>
        </div>
            
        </div>



        <div className=" flex  md:flex lg:hidden "> 
        {/* Nav Bar Toggler */}

        <button> <ViewListIcon className="h-8 w-8   " />  </button>

        
        
        </div>



</div>

</div>





</div>        






        <div >
            {/* Page Routing */}
            {/* <Route path="/" exact content={Annapurna_hotel} />  */}
            <Switch>

  
             <Route path="/" exact component={homeRoute} /> 
             <Route path="/Annapurna_hotel" component={annapurnaHotel} /> 

              <Route path="/boudha_hotel"    component={boudhaHotel} /> 
              <Route path="/kathmandu_hotel" component={kathmanduHotel} /> 

                <Route path="/sign_up" component={signUp} />





   </Switch>
   </div>
 

</>





    );

}

export default App;
