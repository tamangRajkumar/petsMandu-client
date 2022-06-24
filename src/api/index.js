import axios from "axios";

//User Sign Up
export const signUpUser = (signUpData) => {
  return axios.post("http://localhost:9000/api/signup", signUpData);
};

//User Log In
export const userLogIn = (userLogInData) => {
  return axios.post("http://localhost:9000/api/login", userLogInData);
};

// Image Upload in Clodinary and gets Public key and Image Url form cloudinary
export const uploadImage = (formData) => {
  return axios.post("http://localhost:9000/api/upload-image", formData);
};

// Post Submit
export const postSubmit = (postSubmitData, token) => {
  return axios.post("http://localhost:9000/api/create-post", postSubmitData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
