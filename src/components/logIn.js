import React from "react";


function logIn(){
    return (
        <div>
        <h1 className="text-white"> Log In </h1>

        <div className="flex justify-around items-center">
       <div>
           <h1 className="font-bold ">Website Logo</h1>
       </div>



   <div className="mt-40 flex flex-col items-center justify-center text-center  ">
      <h1 className="font-bold text-3xl">Log In</h1>
                      
                      
      <input type="email" placeholder="Enter Your Email "  className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center" />
          <input type="text" placeholder="Enter password"   className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"/>
         

          <button type="submit" className="bg-black text-white rounded-2xl shadow-xl p-1.5 font-bold m-3 hover:text-gray-100 transform hover:scale-110  hover:shadow-xl">Log In </button> 
 


       </div>

       </div>

          </div>
                   
 
    );
}

export default logIn;