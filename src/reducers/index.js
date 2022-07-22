import { combineReducers } from "redux";
import { authUser } from "./authUser";
import { postEditModalPreData } from "./postEditModalPreData";
import { updateUserProfile } from "./updateUserProfile";

export default combineReducers({
  authUser: authUser,
  postEditModalPreData: postEditModalPreData,
  updateUserProfile: updateUserProfile,
});
