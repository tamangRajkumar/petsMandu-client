import React, { useState } from "react";
import AddNewPostButton from "../userDashboard/AddNewPostButton";
import PostModal from "../userDashboard/PostModal";

const NavbarPostModal = () => {
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
    <div className="mr-4">
      <AddNewPostButton handlePost={handlePost} NavBarPostButton={true} />

      {postModal && <PostModal dashboard={true} handlePostModal={handlePostModal} />}
    </div>
  );
};

export default NavbarPostModal;
