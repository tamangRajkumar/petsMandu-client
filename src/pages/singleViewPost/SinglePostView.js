import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchIndividualPost,
  postCommentSubmit,
  deletePostComment,
  fetchPostCommentsDataOnly,
} from "../../api";
// import { Router, useHistory } from "react-router-dom";
import SinglePostComponent from "../../components/singleViewPost/PostSingleView";
import { useSelector } from "react-redux";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/solid";

const SinglePostView = () => {
  const { params } = useParams();
  const postId = params;

  // console.log(params.match.params.params);
  // console.log(postId)

  const [post, setPost] = useState();
  const [addComment, setAddComment] = useState("");
  // console.log(addComment);

  const [fetchedComments, setFetchedComments] = useState();
  // fetchedComments && console.log(fetchedComments);

  const [postCommentsData, setPostCommentsData] = useState();

  const token = useSelector((state) => state.authUser.currentUser.token);
  // console.log(token);

  const userId = useSelector((state) => state.authUser.currentUser.user._id);
  // console.log(userId)

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await fetchIndividualPost(postId, token);
      // console.log("Fetch posts called");

      // data && console.log(data.comments);
      setPost(data);
      setPostCommentsData(data.comments);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  const handleAddComments = async () => {
    // console.log("Called");
    try {
      const { data } = await postCommentSubmit(addComment, postId, token);
      if (data.commentPosted == "true") {
        // console.log(data.updatedPost.comments);
        // console.log("Called here");
        setPostCommentsData(data.updatedPost.comments);
        setAddComment("");
      }
      // console.log(data);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  const fetchCommentsOnly = async () => {
    try {
      const { data } = await fetchPostCommentsDataOnly(postId, token);
      // console.log(data)
      setPostCommentsData(data);
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  const handleDeleteComment = async (commentData) => {
    try {
      const answer = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (!answer) return;
      const commentId = commentData._id;
      console.log(commentId);
      const { data } = await deletePostComment(postId, commentId, token);
      // console.log(data);
      if (data.postCommentDeleted == "true") {
        fetchCommentsOnly();
      }
    } catch (error) {
      console.log("Error=> ", error);
    }
  };

  // postCommentsData && console.log(postCommentsData[0].created);
  // postCommentsData && console.log(moment(postCommentsData[1].createdAt).fromNow());
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
            <div className="bg-gray-200 my-5 mx-20 pt-5 mt-10 pl-10 pr-10  h-48  rounded-lg ">
              <p className="border-b-2 border-gray-300 mr-5 pt-1 pb-2">
                <span>Posted By: </span>
              </p>

              <p className="border-b-2 border-gray-300 mr-5 py-2">
                <span>Location: {post.address} </span>
              </p>
              <p className="border-b-2 border-gray-300 mr-5 py-2">
                <span>Post Date: {moment(post.createdAt).calendar()} </span>
              </p>

              <p className="py-2" >
                <span>Post Expiry: Null </span>
              </p>
            </div>

            {/* Comments section */}
            <div className="bg-gray-300 my-5 mx-10 mt-20 pt-5 px-5  py-10 rounded-lg">
              <p className="text-2xl font-semibold ">Comments:</p>
              <div>
                {/* Check whether has comments or not */}
                {postCommentsData && postCommentsData.length > 0 ? (
                  postCommentsData &&
                  postCommentsData.map((commentData) => {
                    return (
                      <div
                        key={commentData._id}
                        className="flex-col z-50 my-14 border-b-2 border-gray-400 pb-8"
                      >
                        <div className="flex items-center mt-4">
                          <div>
                            <img
                              src={commentData.postedBy.image.url}
                              className="h-14 w-14 rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="pl-2">
                            <div className="flex ">
                              <p className="mr-1 font-medium">
                                {commentData.postedBy.fname}
                              </p>
                              <p className="font-medium">
                                {commentData.postedBy.lname}
                              </p>
                            </div>
                            <div>
                              {/*Posted Time */}
                              {moment(commentData.created).fromNow()}
                            </div>
                          </div>
                        </div>

                        <div className="flex  mt-5 justify-between items-center">
                          {/* Typed Comment */}
                          <div className="flex w-full ml-5 mr-4  bg-gray-100 rounded-lg pl-5 py-2 ">
                            <p>{commentData.text}</p>
                          </div>
                          {/* Delete Comment button Icon */}
                          {/* <p>{userId}</p>
                          <p>{commentData.postedBy._id}</p> */}

                          {userId == commentData.postedBy._id && (
                            <div className="">
                              <button
                                onClick={() => handleDeleteComment(commentData)}
                                className="focus:outline-none"
                              >
                                <TrashIcon className="h-8 w-8 mr-5 focus:outline-none text-red-400 bg-white shadow-md p-1 rounded-full " />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-lg font-base mt-4 mb-5">No Comments Yet</p>
                )}
              </div>

              {/* input Comment */}
              <div className="mt-8 flex ">
                <input
                  type="text"
                  className="w-full rounded-lg px-5 py-1 focus:outline-none  "
                  placeholder="Post Your Comment"
                  value={addComment}
                  onChange={(e) => {
                    setAddComment(e.target.value);
                  }}
                />

                <div className="ml-4">
                  <button
                    type="submit"
                    onClick={handleAddComments}
                    className=" rounded-xl py-2 px-3 my-1 focus:outline-none font-bold text-base shadow-md bg-gradient-to-r
                     from-purple-300 to-purple-400 transform hover:scale-110 hover:shadow-xl duration-150"
                  >
                    <p> Post </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePostView;
