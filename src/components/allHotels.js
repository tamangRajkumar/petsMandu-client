import React from "react";
import Cards from "./Cards"
import allHotelsList from "./allHotelsList";



function allHotels(){
    return (
        <div >
                   <h1 className="text-white"> Explore Various Rents</h1>
                   <div>
                {/* All Hotels List */}
                <h1 className="font-bold text-4xl mt-32 ml-20"> Explore Various Rents  </h1>
                <p className="ml-20">Add filters by place/ price/ location</p>
              
              <div className="flex flex-wrap items-center justify-center text-center">
           
            
            
            {allHotelsList.map(  
                function(lists){
                  return ( 
                  <Cards
                   
                    key={lists.id}
                    name={lists.name}
                    img={lists.imgURL}
                    place={lists.place }
                    rating={lists.rating}
                    cost={lists.cost}
                    href={lists.forHref}
                    
        
                    />
                   ); 
                }
            )
            }
     
        </div>
        </div>

                   </div>
 
    );
}

export default allHotels;