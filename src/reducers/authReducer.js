import { LOGIN } from "../actions/types";
import { useEffect, useState } from "react";

// [initialState, setInitialState] = useState({
//   isAuthenticated: false,
//   currentUser: {}, //After registered backend will send ok:true token and user data that will be stored herer
// });

const initialState = {
  // isAuthenticated: false,
  isAuthenticated: window.localStorage.getItem("authUser") ? true : false,
  //After registered backend will send ok:true token and user data that will be stored herer
  currentUser: window.localStorage.getItem("authUser")
    ? JSON.parse(window.localStorage.getItem("authUser"))
    : {},
};

// useEffect(() => {
//   setInitialState(JSON.parse(window.localStorage.getItem("authUser")));
// }, []);

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
