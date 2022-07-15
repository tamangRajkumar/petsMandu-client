import React from "react";
import Avatar from "../../images/Avatar.png";
import { PencilIcon } from "@heroicons/react/solid";

const UserProfile = ({ fName, lName, userEmail }) => {
  return (
    <div className=" w-1/4 h-full  fixed top-28 z-0 left-0 sm:hidden md:hidden  lg:grid pt-10  mr-20 bg-gray-50  text-center justify-center items-center  overflow-y-scroll ">
      {/* Edit Post button and Icon */}
      <div className="flex  mr-12 absolute  top-10 right-12">
        <label className="flex flex-col  bg-gray-100 cursor-pointer rounded-full  justify-center items-center">
          <input
            type="file"
            accept="images/*"
            hidden
            // value={postSubmitData.image}
            // onChange={handleImage}
          />

          <PencilIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1.5 rounded-full " />
        </label>
      </div>

      <div className=" pb-5  border-b-1 border-gray-200  mx-10  ">
        <img src={Avatar} alt="" className="h-32  m-auto rounded-full" />
      </div>

      <div className="mt-4  space-y-3 pb-60">
        <div className="flex space-x-1.5 text-center justify-center items-center">
          <h1 className="text-lg font-semibold text-gray-500">{fName} </h1>

          <h1 className="text-lg font-semibold text-gray-500">{lName}</h1>
        </div>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">
          {userEmail}
        </h1>{" "}
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>
        {/* <h1 className="text-lg font-semibold text-gray-500">Phone</h1> */}
      </div>
    </div>
  );
};

export default UserProfile;
