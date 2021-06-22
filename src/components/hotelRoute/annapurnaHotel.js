import React from "react";
import listOfHotels from "../listOfHotels";

function annapurnaHotel(){
   

        
   
    return(

            <div>
        <h1 className="text-white" >Annapuran Hotel</h1>
        <div className="text-center font-bold text-3xl h-500 mt-20 mb-5 ">
        <h1>Annapurna Hotel</h1>
        </div>
      
                  
         <div className="flex flex-wrap ">
        <div className="max-w-3xl ">
        <img src= {listOfHotels[0].imgURL} alt=""/>
        </div>


        <div>
            <p className="text-xl font-bold ml-5">Hotel Discription</p>
        </div>
        


        </div>
        


        <div>
            <p className="text-center font-bold  text-xl m-20">Google Map</p>
        </div>
        
        <div>
        <p className="text-center font-bold  text-xl m-20">Rating and Commenting Section</p>
        </div>



        </div>
    );
    

}
export default annapurnaHotel;