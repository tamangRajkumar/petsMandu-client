import axios from "axios";

//User Sign Up
export const signUpUser = (signUpData) => {
  return axios.post("http://localhost:9000/api/signup", signUpData);
};

//User Log In
export const userLogIn = (userLogInData) => {
  return axios.post("http://localhost:9000/api/login", userLogInData);
};
