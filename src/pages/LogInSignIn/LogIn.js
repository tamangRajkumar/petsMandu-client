import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logInUser } from "../../actions/authActions";
import coverImage from "../../images/signInLogIn/signUpCoverImage.jpg";
function LogIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [logInConfirmed, setLogInConfirmed] = useState("false");
  const history = useHistory();

  //check whether the user is logged in or not if logged in and isAuthenticated is true then redirect to dashboard
  const authUser = useSelector((state) => state.authUser.isAuthenticated);
  if (authUser == true) {
    history.push("/");
  }

  const [userLogInData, setUserLogInData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(userLogInData, history));
  };


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-white"> Log In </h1>

        <div className="flex justify-around items-center">
          <div className="flex justify-center items-center mt-40">
            <img className="rounded-3xl " src={coverImage} alt="" />
          </div>

          <div className="mt-40 flex flex-col items-center justify-center text-center  ">
            <h1 className="font-bold text-3xl">Log In</h1>

            <input
              type="email"
              placeholder="Enter Your Email "
              className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
              value={userLogInData.email}
              onChange={(e) =>
                setUserLogInData({ ...userLogInData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Enter Your password"
              className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"
              value={userLogInData.password}
              onChange={(e) =>
                setUserLogInData({ ...userLogInData, password: e.target.value })
              }
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
            >
              Log In
            </button>
            <div className="flex gap-2">
              <h1 className="text-md">Not yet Signed up?</h1>{" "}
              <Link to="/signup">
                <p className="underline underline-offset-4 text-red-600 text-md">
                  sign up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
