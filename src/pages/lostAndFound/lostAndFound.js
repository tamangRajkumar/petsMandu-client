
import React from "react";
import allPetsLists from "../../components/AllPetsLists/allPetsList"
import Cards from "../../components/CardsVerticalAligned";

function lostAndFoundPets(){
    return(
        <div>
        {/* Musical Instruments section */}
        <h1 className="text-white">
            Hello world
        </h1>


        {/* Search Filters */}
        <div className="text-center">
            <h1 className="mt-24 font-bold  text-2xl">
                Search By Filters                 
            </h1>
            <div className="flex m-3 justify-center ">
            
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > All Lost and found pets </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Lost And Found Dogs </button>
            <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl"  > Lost And Found Cats</button>
            </div>


            <div className="mx-32 mt-5 space-y-10">
            {/* All Instruments Lists  */}
           {allPetsLists.map(
               function(list){
                   return(
                       <Cards 
                            key={list.id}
                            name={list.name}
                            img={list.imgURL}
                            place={list.place}
                            rating={list.rating}
                            cost={list.cost}
                            href={list.forHref}



                       />
                   )
               }
           )}

            </div>



        </div>


        </div>

    );


    }


export default lostAndFoundPets;



