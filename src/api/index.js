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

// fetch Posts
export const fetchPosts = (token) => {
  return axios.get("http://localhost:9000/api/user-posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete Post
export const deletePost = (postId, token) => {
  return axios.delete(`http://localhost:9000/api/delete-post/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Fetch Adopt Pets Posts
export const fetchPostsByCategory = (category) => {
  return axios.post("http://localhost:9000/api/fetchpostsbycategory", {
    category,
  });
};

//Get individual post
export const fetchIndividualPost = (postId) => {
  return axios.get(`http://localhost:9000/api/fetchindividualpost/${postId}`);
};

//fetch post to edit in Modal
export const fetchPostToEdit = (postId) => {
  return axios.post("http://localhost:9000/api/fetchposttoedit", { postId });
};
