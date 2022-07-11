import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserProfile from "../../components/userDashboard/UserProfile";
import PostedContent from "../../components/userDashboard/PostedContent";
import AddNewPostForm from "../../components/userDashboard/AddNewPostButton";
import { useSelector } from "react-redux";
import PostModal from "../../components/userDashboard/PostModal";
import BackgroundGray from "../../components/userDashboard/backgroundGray";
import { fetchPosts } from "../../api";
import { PencilIcon } from "@heroicons/react/solid";

const UserDashboard = () => {
  //   getCurrentUser();

  // const token = useSelector((state) => state.authUser.currentUser.token);
  // // console.log(token);
  // const getCurrentUser = async () => {
  //   try {
  //     const { data } = axios.get("http://localhost:9000/current-user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },

  //     });
  //     console.log("ok")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const authUser = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.currentUser.user);
  const token = useSelector((state) => state.authUser.currentUser.token);
  const currentUser = useSelector((state) => state.authUser.currentUser);

  console.log(token);
  // console.log(user.name);
  // console.log(user.email);

  const history = useHistory();
  if (!authUser) {
    history.push("/login");
  }

  const [postModal, setPostModal] = useState(false);
  const [posts, setPosts] = useState();
  const [editPost, setEditPost] = useState();

  const handlePostModal = (value) => {
    if (value.editPost) {
      setPostModal(value.setPostModalTrue);
      setEditPost(value.editPost);
    } else {
      setPostModal(value);
      setEditPost(false)
    }
    // console.log("Clicked");
  };

  //get user posts
  useEffect(() => {
    if (currentUser && token) getUserPosts();
  }, [currentUser, token]);

  // Fetch user Posts in dashboard
  const getUserPosts = async () => {
    try {
      const { data } = await fetchPosts(token);
      setPosts(data);
      // console.log(posts);
      // console.log(data[1]._id);

      {
        // posts && console.log(posts[0]._id);
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  const singlePostView = (post) => {
    history.push(`/user/viewpost/${post._id}`);
  };

  return (
    <>
      <div className="pt-32">
        <div className="flex justify-center items-center  ">
          <h2 className="text-2xl font-bold ">Dashboard</h2>
        </div>
        <div className="pt-10 flex gap-x-5 sm:flex-col md:flex-col  lg:flex-row justify-center  ">
          {/* User Profile */}
          <div className="mr-10   z-0">
            <UserProfile
              fName={user.fname}
              lName={user.lname}
              userEmail={user.email}
            />
          </div>

          <div className="lg:ml-80 flex-auto  bg-gray-50 justify-center items-center   ">
            {/* Add New Post  */}

            <AddNewPostForm handlePostModal={handlePostModal} />

            {/* Show Modal */}

            {postModal ? (
              <>
                <PostModal
                  handlePostModal={handlePostModal}
                  dashboardTrue={true}
                  getUserPosts={getUserPosts}
                  editPost={editPost}
                />{" "}
              </>
            ) : null}

            {/* Posted Contents */}
            <div>
              <PostedContent
                getUserPosts={getUserPosts}
                posts={posts}
                token={token}
                singlePostView={singlePostView}
                handlePostModal={handlePostModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
