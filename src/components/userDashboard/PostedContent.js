import React, { useEffect, useState } from "react";
import { deletePost, fetchPosts } from "../../api";
import { Selector, useSelector } from "react-redux";
import Avatar from "../../images/Avatar.png";
import { TrashIcon, XIcon, PencilIcon } from "@heroicons/react/solid";

const PostedContent = ({ getUserPosts, posts, setPosts }) => {
  // const currentUserId = useSelector(
  //   (state) => state.authUser.currentUser.user._id
  // );

  // console.log(currentUser.user._id);

  // Handle Delete Post
  const handleDeletePost = async (post, token) => {
    try {
      const answer = window.confirm("Are you sure to delete?");
      if (!answer) return;
      const postId = post._id;
      console.log(postId);

      const { data } = await deletePost(postId, token);
      console.log(data);
      if (data.deleted == "true") {
        getUserPosts();
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  return (
    <div className="flex-col  ">
      <div className="flex justify-center itmes-center mt-10">
        <h1 className="text-2xl font-bold text-gray-500">
          {" "}
          Your Posted Contents{" "}
        </h1>
      </div>
      <div className="flex-col justify-center itmes-center  text-center ">
        {/* <pre> {JSON.stringify(posts, null, 4)}</pre> */}
        {posts &&
          posts.map((post) => {
            return (
              <>
                <div
                  key={post._id}
                  className="mt-10 mb-20 md:mx-40 py-3 border-2 border-gray-200 shadow-md shadow-red-500 rounded-xl "
                >
                  {/* Edit Post button and Icon */}
                  <div className="flex justify-end mr-5">
                    <button
                      // onClick={() => handleDeletePost(post)}
                      className="focus:outline-none"
                    >
                      <PencilIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1.5 rounded-full " />
                    </button>
                  </div>

                  <div className="mt-1 mb-4">
                    <img src={Avatar} className="flex m-auto h-10 w-10" />
                  </div>

                  {post.image ? (
                    <img
                      src={post.image && post.image.url}
                      className="flex  m-auto h-80 object-contain"
                      alt=""
                    />
                  ) : (
                    ""
                  )}

                  {/* Post Descriptions */}
                  <p className="mt-1 mb-2 text-base font-medium">
                    {post.description}
                  </p>

                  {/* User Address  */}
                  <p className="mt-1 mb-2 text-base font-medium">
                    <span className="text-lg">Location:</span>
                    <span className="text-base text-blue-700">
                      {" "}
                      {post.address}
                    </span>
                  </p>

                  {/* Category  */}
                  {/* <p className="mt-1 mb-2 text-base font-medium">
                    <span className="text-lg">Category:</span>
                    <span className="text-base text-blue-700">
                      {" "}
                      {post.category}
                    </span>
                  </p> */}

                  {/* Delete Post button and Icon */}
                  <div className="flex justify-end mr-5">
                    <button
                      onClick={() => handleDeletePost(post)}
                      className="focus:outline-none"
                    >
                      <TrashIcon className="h-8 w-8 text-gray-400 bg-white shadow-md p-1 rounded-full " />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default PostedContent;
