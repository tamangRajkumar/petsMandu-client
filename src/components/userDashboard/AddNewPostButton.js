import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const AddNewPostButton = ({ handlePost, NavBarPostButton }) => {
  return (
    <>
      {NavBarPostButton ? (
        <div className="flex justify-center items-center mt-5 mb-5 ml-5">
          <button
            onClick={handlePost}
            className="bg-gray-400 focus:outline-none   rounded-lg"
          >
            <div className="shadow-lg bg-white rounded-md">
              <PlusIcon className="h-8 w-8 text-gray-600" />
            </div>
          </button>
        </div>
      ) : (
        <div className="flex-col ">
          <div className="flex justify-center items-center">AddNewPostForm</div>
          <div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center border-2 border-gray-400 px-5 py-1 rounded-md">
                <p>Create a Post</p>
              </div>

              <div className="flex justify-center items-center mt-5 mb-5 ml-5">
                <button
                  onClick={handlePost}
                  className="bg-gray-400 focus:outline-none   rounded-lg"
                >
                  <div className="shadow-lg bg-white rounded-md">
                    <PlusIcon className="h-8 w-8 text-gray-600" />
                  </div>
                </button>
              </div>
            </div>
            {/* Posted Contents */}
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewPostButton;
