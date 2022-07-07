import React from "react";
// import App from "../containers/App.css";
import { HeartIcon, PhoneIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const CardsVerticalAligned = ({ key, description, image, address }) => {
  return (
    <div
      key={key}
      className=" border border-gray-100 shadow-lg rounded-2xl  my-20 mx-20  py-6 px-4 hover:shadow-xl transform  duration-150 "
    >
      {/* body Hotel lists */}

      <div className="flex mx-10 ">
        <div>
          <img className=" h-60 w-60 rounded-xl" src={image} alt="" />
        </div>

        <div className="flex-grow space-y-10   ml-6">
          <HeartIcon className="h-12 w-12 p-1 text-red-500  float-right    rounded-full" />

          <h1 className="font-bold  text-left text-xl"> {description} </h1>

          <p className="text-left"> {address} </p>

          {/* <p className=" text-right font-bold"> {props.cost} </p> */}
        </div>
      </div>
    </div>
  );
};

export default CardsVerticalAligned;
