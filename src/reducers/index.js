import { combineReducers } from "redux";
import { authUser } from "./authUser";
import { postEditModalPreData } from "./postEditModalPreData";

export default combineReducers({
  authUser: authUser,
  postEditModalPreData: postEditModalPreData,
});
