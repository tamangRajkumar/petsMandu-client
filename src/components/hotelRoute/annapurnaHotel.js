import React from "react";
import listOfHotels from "../listOfHotels";

function annapurnaHotel(){
    return(
        <div className="text-center block content-center justify-center items-center bg-gray-400 h-500">
        <h1>Annapurna Hotel</h1>
       
                  
        <div className="max-w-xl ">
        <img src= {listOfHotels[0].imgURL} alt=""/>
        </div>
        
      
        </div>
    );
}
export default annapurnaHotel;