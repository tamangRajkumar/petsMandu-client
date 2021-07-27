import React from "react";
import listOfHotels from "../AllPetsLists/landingPagePetsList";
import Cards from "../Cards";
import imgBoudha from "./imgBoudha.jpg";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon, HeartIcon, apptarIcon} from '@heroicons/react/solid';
// import ourFeatured from "../ourFeatured";
// import {useHistory} from 'react-router-dom';

import {Link} from "react-router-dom";



function homeRoute(){
   

    // const history = useHistory();


    return(
       
<>  
        

      <div>  


    
        {/* Image Carousel */}
        {/* <input className="text-center mt-3 border border-gray-300 rounded-2xl px-20 "  type="text" placeholder="Hotel Name? " />   */}
       <div className="flex   justify-center items-center ">  
          {/* <ChevronDoubleLeftIcon className="w-20 h-20 text-gray-500 cursor-pointer"/>    */}

       <div className="mx-20  mt-20 hover:shadow-2xl rounded-3xl ">


       <div>
       <button className="absolute right-20 md:right-40 mt-80 animate-spin outline-none   rounded-2xl bg-blue-300 px-2 pb-1  hover:bg-black transform hover:scale-110 hover:bg-opacity-10 hover:border-gray-700 duration-150"
    //   
    //{recheck this useHistory code }
    // onClick={ history.push('/home')
    //         }  
     > 
       
       <Link to="/sign_up"  className="text-xl px-5 text-black font-bold hover:text-gray-200 outline-none">
        Sign Up And Become A Host  </Link>
       </button>
       </div >

   <img src={imgBoudha} alt="" className="h-96  w-full  rounded-3xl " />

  

   </div>

          {/* <ChevronDoubleRightIcon className="text-gray-500 w-20 h-20  cursor-pointer" />   */}
           
            
     
            </div>

            
 

            </div>









        
                {/* Top Rated Hotels */}

            <div >
                  <h1 className="font-bold text-4xl mt-20 ml-20 "> Our Featured Posts    </h1>
        
        

        <div className="flex items-center justify-center">
            <div className="flex text-center justify-center">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
                    key={lists.id}
                    name={lists.name}
                    img={lists.imgURL}
                    place={lists.place }

                    rating={lists.rating}
                    cost={lists.cost}

                
                        Cost

                    href={lists.forHref}
                    
        
                    />
                   ); 
                }
            )
            }
            </div>

            <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-200 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
            
            </div>



            </div>




            <div>
                {/* Our Featured */}
                <h1 className="font-bold text-4xl mt-10 ml-20"> Your Nearest Pets shops  </h1>

              
              <div className="flex items-center justify-center">
            <div className="flex text-center justify-center">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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


        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>












            <div>
                {/* Our Featured */}
                <h1 className="font-bold text-4xl mt-10 ml-20"> Hire Nearest Vetneries  </h1>

              
              <div className="flex items-center justify-center">
            <div className="flex text-center justify-center">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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


        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>

            




            <div>
                {/* Near Your Location */}
                <h1 className="font-bold text-4xl mt-10 ml-20"> Dogs   </h1>
            
            
            <div className="flex items-center justify-center">
                <div className="flex text-center ">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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


        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>





            <div>
            {/* Trending Now */}
            <h1 className="font-bold text-4xl mt-10 ml-20"> Cats  </h1>
           
           
           <div className="flex items-center justify-center">
            <div className="flex text-center ">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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
           
        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>



            



            <div>
            {/* Trending Now */}
            <h1 className="font-bold text-4xl mt-10 ml-20"> Fish & Aquariums  </h1>
           
           
           <div className="flex items-center justify-center">
            <div className="flex text-center ">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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
           
        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>








            <div>
            {/* Trending Now */}
            <h1 className="font-bold text-4xl mt-10 ml-20"> Parrots & Birds </h1>
           
           
           <div className="flex items-center justify-center">
            <div className="flex text-center ">
            {listOfHotels.map(  
                function(lists){
                  return ( <Cards
                   
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
           
        <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
        </div>

            </div>





<div>
    
<div>
            {/* List Of All Hotels */}
            <h1 className="font-bold text-4xl mt-10 ml-20"> Toys And Peripherals   </h1>

            
        <div className="flex text-center justify-center "> 
    {/* Body List of hotels */}
     
  
            {listOfHotels.map( function(lists) {    
               return(   

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
})}

</div>
</div>
</div>









        
      


    </>






    );
}
export default homeRoute;