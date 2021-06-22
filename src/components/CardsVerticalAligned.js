import React from "react";
// import App from "../containers/App.css";
import {HeartIcon, PhoneIcon, StarIcon} from '@heroicons/react/solid';
 import {Link} from 'react-router-dom';


function CardsVerticalAligned(props){

    

    return(

<div className=" border border-gray-100 shadow-lg rounded-2xl  m-4  py-6 px-4 hover:shadow-xl transform  duration-150 ">
         
        {/* body Hotel lists */}
        
        <Link to={props.href} >
        <div className="flex ">
        
       
        <div>
        <img className=" h-38 w-80 rounded-xl"src= {props.img} alt="" />
        </div>

        <div className="flex-grow space-y-10   ml-6">
        <HeartIcon className="h-12 w-12 p-1 text-red-500  float-right    rounded-full"/>

        <h1 className="font-bold  text-left text-xl"> {props.name} </h1>
       
        <p className="text-left"> {props.place} </p>
           
            <p className=" text-right font-bold"> {props.cost} </p>           


       
        </div>
        
      

        </div> 
        </Link>
        </div> 
         

    );


}

export default CardsVerticalAligned;