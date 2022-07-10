import React from "react";
import { useParams } from "react-router-dom";
// import { Router, useHistory } from "react-router-dom";
import SinglePostComponent from "../../../components/singleViewPost/PostSingleView";

const SinglePostView = () => {
  const {params} = useParams();
  //   console.log(Router)
  //  const history= useHistory();
  //   console.log(history)
  // console.log(params.match.params.params);
  console.log(params)
  return (
    <div className="mt-20 p-20">
      <SinglePostComponent />
    </div>
  );
};

export default SinglePostView;
