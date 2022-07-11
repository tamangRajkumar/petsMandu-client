import { LOGIN, LOGOUT, POSTSUBMIT } from "./types";
import * as api from "../api/index";

//Sign Up User
export const signUpUser = (signUpData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpUser(signUpData);
    // console.log(data.ok);
    // dispatch({
    //   type: SIGNUP,
    //   payload: data,
    // });
    if (data.ok == "true") {
      history.push("/login");
    }
  } catch (error) {
    console.log("Error=>", error);
  }
};

//Log In User
export const logInUser = (userLogInData, history) => async (dispatch) => {
  try {
    const { data } = await api.userLogIn(userLogInData);
    console.log(data);
    if (data) {
      dispatch({
        type: LOGIN,
        payload: data,
      });

      window.localStorage.setItem("authUser", JSON.stringify(data));

      if (data.ok == "true") {
        history.push("/user/dashboard");
      }
    }
  } catch (error) {
    console.log("ERROR=> ", error);
  }
};

//Log Out User From Browser when clicked Log Out
export const logOutUser = (userLogOut) => {
  return { type: LOGOUT, payload: userLogOut };
};
