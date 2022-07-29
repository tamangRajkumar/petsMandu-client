import React from "react";
// import App from "../containers/App.css";
import { HeartIcon, PhoneIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CardsVerticalAligned = ({
  key,
  post,
  description,
  image,
  address,
  title,
}) => {
  // Handle Route to view invidual post
  const history = useHistory();
  const handleViewPostRoute = (post) => {
    const postId = post._id;
    history.push(`/user/viewpost/${postId}`);
  };

  return (
    <div
      key={key}
      className=" border border-gray-100 shadow-lg rounded-2xl  my-10 mx-20  py-6 px-4 hover:shadow-xl transform  duration-150 "
    >
      {/* body pets lists */}

      <div className="flex mx-10 ">
        <div onClick={() => handleViewPostRoute(post)}>
          <img
            className=" h-60 w-60 rounded-xl cursor-pointer object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="flex-grow space-y-12   ml-6">
          <HeartIcon className="h-12 w-12 p-1 text-red-500  float-right    rounded-full" />

          <h1
            className="font-bold cursor-pointer text-left text-xl"
            onClick={() => handleViewPostRoute(post)}
          >
            {title}
          </h1>

          <div>
            <p className="text-left"> {description} </p>
            <p className="text-left"> {address} </p>
          </div>

          {/* <p className=" text-right font-bold"> {props.cost} </p> */}
        </div>
      </div>
    </div>
  );
};

export default CardsVerticalAligned;
