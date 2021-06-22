import React from "react";


function signUp(){
    return (
        <div>
                 <h1 className="text-white"> Sign Up </h1>

                 <div className="flex justify-around items-center">
                <div>
                    <h1 className="font-bold ">Website Logo</h1>
                </div>



            <div className="mt-40 flex flex-col items-center justify-center text-center  ">
               <h1 className="font-bold text-3xl">Sign Up</h1>
                               
                               
               <input type="email" placeholder="Enter Your Email "  className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center" />
                   <input type="text" placeholder="Enter password"   className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"/>
                   <input type="text" placeholder="Re-enter password"   className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"/>

                   <button type="submit" className="border border-yellow-300 bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl p-1.5 font-bold m-3 hover:text-gray-100 transform hover:scale-110  hover:shadow-xl">Sign Up </button> 
          


                </div>

                </div>

                   </div>
 
    );
}

export default signUp;