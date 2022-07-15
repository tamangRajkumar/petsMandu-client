import React from "react";

import { PhoneIcon, StarIcon } from "@heroicons/react/solid";

const SinglePostComponent = ({ post }) => {
  console.log(post);
  // post && console.log(post.image)

  if (post) {
    const { description, address, image } = post;
    console.log(image.url);
  }

  return (
    <>
      <p>Hello</p>
      {/* <img src={image.url} /> */}
    </>
  );
  // return (
  //    // );
};

export default SinglePostComponent;
