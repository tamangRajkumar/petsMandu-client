import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserProfile from "../components/userDashboard/UserProfile";
import PostedContent from "../components/userDashboard/PostedContent";
import AddNewPostForm from "../components/userDashboard/AddNewPostButton";
import { useSelector } from "react-redux";
import PostModal from "../components/userDashboard/PostModal";
import BackgroundGray from "../components/userDashboard/backgroundGray";

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
  const history = useHistory();
  if (!authUser) {
    history.push("/login");
  }

  const [postModal, setPostModal] = useState(false);

  const handlePost = () => {
    setPostModal(true);
    // console.log(postModal)
  };

  const handlePostModal = () => {
    setPostModal(false);
    console.log("Clicked");
  };

  return (
    <>
      <div className="pt-32">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <div className="pt-10 flex gap-x-5 sm:flex-col md:flex-col  lg:flex-row justify-center items-center  ">
          <UserProfile />

          <div className="flex-auto bg-blue-100 justify-center items-center">
            {/* Add New Post  */}

            <AddNewPostForm handlePost={handlePost} />

            {/* Show Modal */}


            {postModal ? (
              <>
                
                <PostModal handlePostModal={handlePostModal} dashboardTrue={true} />{" "}
              </>
            ) : (
              ""
            )}

            {/* Posted Contents */}
            <div>
              <PostedContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
