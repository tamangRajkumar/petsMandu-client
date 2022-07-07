import React from "react";
import Avatar from "../../images/Avatar.png";

const UserProfile = ({ fName, lName, userEmail }) => {
  return (
    <div className=" w-1/4 h-full  fixed top-28 z-0 left-0 sm:hidden md:hidden  lg:grid    mr-20 bg-gray-50  text-center justify-center items-center  overflow-y-scroll ">
      <div className="pt-1 pb-5 mt-10 border-b-1 border-gray-200  mx-10  ">
        <img src={Avatar} alt="" className="h-32  m-auto" />
      </div>

      <div className="mt-4  space-y-3 pb-60">
        <div className="flex space-x-1.5 text-center justify-center items-center">
          <h1 className="text-lg font-semibold text-gray-500">{fName}  </h1>

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
