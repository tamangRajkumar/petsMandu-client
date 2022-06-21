import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/solid";
import Avatar from "../../images/Avatar.png";
import BackgroundGray from "./backgroundGray";

const PostModal = ({ handlePostModal, dashboardTrue }) => {
  return (
    <>
      {/* Post Form Start */}
      <BackgroundGray dashboardTrue={dashboardTrue}/>
      <div
        style={{ width: "40rem" }}
        className="absolute ml-auto mr-auto left-0 right-0 bg-white  top-8 z-50 rounded-lg"
      >
        <div className="flex  justify-between  mx-10 mt-5">
          <div className="mt-2 text-xl font-semibold ">Post</div>
          <div className="">
            <button onClick={handlePostModal} className="focus:outline-none">
              <XIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
            </button>
          </div>
        </div>
        <div className="mt-5 mx-8 ">
          <textarea
            className=" h-36 w-full focus:outline-none rounded-xl p-4 border-2 border-gray-200 "
            placeholder="Write descriptions............"
          ></textarea>
        </div>
        <input
          type="text"
          placeholder="Enter Your Address"
          className="outline-none border-2 border-gray-200 rounded-md ml-8 p-2  m-2  "
        />
        <div className="flex justify-between ml-8 mt-2 items-center mr-10">
          <div className="ml-2">
            <label className="flex flex-col shadow-md bg-gray-100 cursor-pointer rounded-md h-28 w-32  justify-center items-center">
              <input type="file" accept="images/*" hidden />

              <PlusIcon className="h-12 w-12 text-gray-500 " />
              <p className="text-base text-gray-500 font-normal">
                Upload Image
              </p>
            </label>
          </div>
          <div className="flex-col justify-center items-center text-center">
            {/* image Preview */}
            <img src={Avatar} alt="" className="h-40 w-40" />
            <p className="font-semibold text-base text-gray-500">
              Image Preview
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-6   py-3 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl ">
            Submit Post
          </button>
        </div>
      </div>

      {/* Post Form  End*/}
    </>
  );
};

export default PostModal;
