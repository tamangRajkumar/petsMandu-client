import React from "react";
import Avatar from "../../images/Avatar.png";

const UserProfile = ({userName, userEmail}) => {
  return (
    <div className=" w-1/3 ml-10 bg-gray-50  text-center justify-center items-center">
      <div className="pt-1 pb-5 mt-4 border-b-1 border-gray-200  mx-10  ">
        <img src={Avatar} alt="" className="h-32  m-auto" />
      </div>

      <div className="mt-4 mb-8 space-y-3">
        <h1 className="text-lg font-semibold text-gray-500">{userName}</h1>

        <h1 className="text-lg font-semibold text-gray-500">{userEmail}</h1>

        {/* <h1 className="text-lg font-semibold text-gray-500">Phone</h1> */}
      </div>
    </div>
  );
};

export default UserProfile;
