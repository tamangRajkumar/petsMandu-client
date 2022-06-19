import React, { useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserProfile from "../components/userDashboard/UserProfile";
import PostedContent from "../components/userDashboard/PostedContent";
import AddNewPostForm from "../components/userDashboard/AddNewPostForm";
import { useSelector } from "react-redux";

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

  return (
    <>
      <div className="pt-40">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <div className="pt-20 flex   gap-x-5 sm:flex-col md:flex-col  lg:flex-row      justify-center items-center  ">
          <UserProfile />

          <div className="flex-auto bg-blue-100 justify-center items-center">
            {/* Add New Post  */}

            <AddNewPostForm />

            <h1 className="text-center">Your Posted Ads</h1>
            <PostedContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
