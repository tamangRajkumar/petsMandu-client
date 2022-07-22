import { USERPROFILEDATA } from "../actions/types";

const initialState = {
  userProfileData: window.localStorage.getItem("userProfileData")
    ? JSON.parse(window.localStorage.getItem("userProfileData"))
    : null,
};

export const updateUserProfile = (state = initialState, action) => {
  switch (action.type) {
    case USERPROFILEDATA:
      return {
        ...state,
        userProfileData: action.payload,
      };
    default:
      return state;
  }
};
