import React from "react";
import listOfHotels from "../listOfHotels";
import Cards from "../Cards";
import imgBoudha from "./imgBoudha.jpg";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon, HeartIcon, StarIcon} from '@heroicons/react/solid';
// import ourFeatured from "../ourFeatured";
// import {useHistory} from 'react-router-dom';


function homeRoute(){
        // const history = useHistory();



    return(
       
<>  
        

      <div>  


    
        {/* Image Carousel */}
        {/* <input className="text-center mt-3 border border-gray-300 rounded-2xl px-20 "  type="text" placeholder="Hotel Name? " />   */}
       <div className="flex   justify-center items-center ">  
         <ChevronDoubleLeftIcon className="w-20 h-20 text-gray-500 cursor-pointer"/>  

       <div className="mx-10  mt-20 hover:shadow-2xl rounded-3xl ">


       <div className=" ml-80">
       <button className="absolute md:mr-20 animate-spin border border-gray-500  rounded-2xl bg-blue-300 px-2 pb-1 mt-80 ml-80  hover:bg-black transform hover:scale-110 hover:bg-opacity-10 hover:border-gray-700 duration-150"
    //    onClick={ ()=>history.push('/Annapurna_hotel')
    //         }  
     > 
       
       <span className="text-2xl text-black font-bold hover:text-gray-200 outline-none">Explore Nearby Hotels </span>
       </button>
       </div >

   <img src={imgBoudha} alt="" className="h-96  w-full  rounded-3xl" />

  

   </div>

          <ChevronDoubleRightIcon className="w-20 h-20 text-gray-500 cursor-pointer" />  
           
            
     
            </div>

            
 

            </div>









        
                {/* Top Rated Hotels */}

            <div >
                  <h1 className="font-bold text-4xl mt-20 ml-20 "> Top Rated Hotels      </h1>
        
        

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

            <ChevronRightIcon className="w-10 h-10 text-gray-500 border broder-gray-300 rounded-3xl shadow-xl transform shadow-inner cursor-pointer hover:shadow-xl hover:scale-125 duration-200  " />
            
            </div>



            </div>





            <div>
                {/* Our Featured */}
                <h1 className="font-bold text-4xl mt-10 ml-20"> Our Featured   </h1>

              
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
                <h1 className="font-bold text-4xl mt-10 ml-20"> Near your Location      </h1>
            
            
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
            <h1 className="font-bold text-4xl mt-10 ml-20"> Trending Now     </h1>
           
           
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
            <h1 className="font-bold text-4xl mt-10 ml-20"> List Of all Hotels     </h1>

            
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








<div>
    <div className="h-40  border border-gray-300 bg-gray-300 mt-10">
        {/* Footer */}

        
            <div>
            {/* Contact Us Section */}
            <h1 className="font-bold text-4xl mt-5 text-center"> Contact Us   </h1>
            </div>


    {/* <link to={contactUs} className="flex justify-center border border-red-300 "> Contact Us</a> */}

    {/* <route path={contactUs}  /> */}

    </div>





        </div>
        
      


    </>






    );
}
export default homeRoute;