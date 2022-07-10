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
  },[]);

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
      <div>
        <div className="bg-red-200 text-center">
          <p className="inline-block mt-20 pt-20  font-semibold text-xl">
            Hello
          </p>
        </div>
        <div className="mt-20">
          <SinglePostComponent />
        </div>
      </div>
    </>
  );
};

export default SinglePostView;
