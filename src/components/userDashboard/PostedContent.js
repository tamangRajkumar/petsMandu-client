import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import { Selector, useSelector } from "react-redux";

const PostedContent = () => {
  const [posts, setPosts] = useState();
  const currentUser = useSelector((state) => state.authUser.currentUser);
  const token = useSelector((state) => state.authUser.currentUser.token);
  console.log(token);

  
  useEffect(() => {
    if (currentUser && token) getUserPosts();
  }, [currentUser, token]);

  const getUserPosts = async () => {
    try {
      const { data } = await fetchPosts(token);
      setPosts(data);
      // console.log(posts);
      // console.log(data);
      console.log(posts[1].image.url)
    } catch (error) {
      console.log("Error => ", error);
    }
  };



  return (
    <div className="flex-col ">
      <div className="flex justify-center itmes-center">
        <h1>PostedContent</h1>
      </div>
      <div className="flex justify-center itmes-center">
      
       <pre> {JSON.stringify(posts, null, 4)}</pre>

       <div>
       
       </div>
      </div>
    </div>
  );
};

export default PostedContent;
