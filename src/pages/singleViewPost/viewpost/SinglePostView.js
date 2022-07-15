import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIndividualPost } from "../../../api";
// import { Router, useHistory } from "react-router-dom";
import SinglePostComponent from "../../../components/singleViewPost/PostSingleView";

const SinglePostView = () => {
  const { params } = useParams();
  const postId = params;

  // console.log(params.match.params.params);
  // console.log(postId)

  const [post, setPost] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await fetchIndividualPost(postId);
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  return (
    <>
      {post && (
        <div className="flex md:flex lg:flex mt-12 mx-20 ">
          <div className="sticky top-32 mt-10 flex-none h-96 w-96 bg-gray-50 p-5 rounded-lg">
            <img src={post.image.url} alt="" className="object-contain w-96" />
            <div className="flex justify-between mx-3">
              <p>Views</p>
              <p>{post.category}</p>
            </div>
          </div>

          {/* Informations and Descriptions  */}
          <div className="flex-col w-full mx-8 bg-gray-50 rounded-lg py-5">
            <div className="mx-5 border-b-2 pb-2 ">
              <h1 className="text-3xl font-semibold pl-5">Title</h1>
            </div>
            <div className="ml-10 border-b-2 border-black pl-5 w-32">
              <h1 className="'text-2xl font-normal mt-5 pb-1 ">Description</h1>
            </div>
            <div className="pl-10 mt-5">
              <p>{post.description}</p>
            </div>
            {/* Informations */}
            <div className="bg-gray-200 my-5 mx-10 pt-5 mt-10 pl-5  h-48  rounded-lg">
              <p>
                <span>Posted By: </span>
              </p>

              <p>
                <span>Location: {post.address} </span>
              </p>
              <p>
                <span>Post Date: {post.createdAt} </span>
              </p>

              <p>
                <span>Post Expiry: Null </span>
              </p>
            </div>

            {/* Comments section */}
            <div className="bg-gray-200 my-5 mx-10 mt-20 pt-5 px-5  py-10 rounded-lg">
              <p className="text-2xl">Comments:</p>
              <div>
                <div>
                  <div className="flex items-center mt-4">
                    <div>
                      <img
                        src={post.image.url}
                        className="h-12 w-12 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="pl-2">
                      <p className="">Name</p>
                      <p className="">Time</p>
                    </div>
                    {/* Typed Comments */}
                    <div></div>
                  </div>
                </div>
                <div className="mx-10 mt-3 bg-gray-300 rounded-lg px-5 py-2 ">
                  <p>nvadfngandnva</p>
                </div>
              </div>

              {/* input Comment */}
              <div className="mt-8 ">
                <input
                  type="text"
                  className="w-full rounded-lg px-5 py-1 focus:outline-none  "
                  placeholder="Type Your Comment"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePostView;
