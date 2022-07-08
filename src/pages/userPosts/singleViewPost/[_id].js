import React from "react";
import { useHistory } from "react-router-dom";

const EditPost = () => {
  history = useHistory();
  console.log("history=> ", history );

  return <div>EditPost</div>;
};

export default EditPost;
