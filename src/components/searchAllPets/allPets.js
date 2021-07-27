import React from "react";
import Cards from "../Cards"
import allHotelsList from "../AllPetsLists/allPetsList";



function allPets(){
    return (
        <div >
                   <h1 className="text-white"> Explore all pets</h1>
                   <div>
                {/* All Hotels List */}
                <h1 className="font-bold text-4xl mt-24 ml-20 text-center"> Explore Various Pets  </h1>
                <p className="ml-20 flex justify-center">Add filters by place/ price/ location</p>
              
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

export default allPets;