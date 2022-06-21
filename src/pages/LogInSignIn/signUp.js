import React from "react";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { signUpUser } from "../../actions/authActions";
import { useDispatch, Selector, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import coverImage from "../../images/signInLogIn/signUpCoverImage.jpg";

// Import Image

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedSignUp: "false",
  });

  //check whether the user is logged in or not if logged in and isAuthenticated is true then redirect to dashboard
  const authUserLoggedin = useSelector(
    (state) => state.authUser.isAuthenticated
  );
  if (authUserLoggedin == true) {
    history.push("/");
  }
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmedSignUp, setConfirmedSignUp] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signUpData);
    dispatch(signUpUser(signUpData, history));
  };

  if (signUpData.confirmedSignUp === "true") {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around items-center">
          <div className="flex justify-center items-center mt-40">
            <img className="rounded-3xl " src={coverImage} alt="" />
          </div>

          <div className="mt-40 flex flex-col items-center justify-center text-center  ">
            <h1 className="font-bold text-3xl">Sign Up</h1>

            <>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
                value={signUpData.name}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className="outline-none border border-gray-50 rounded-3xl p-2 px-10 m-2 shadow-lg text-center"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Enter password"
                className="outline-none border border-gray-50 rounded-3xl p-2 m-2 shadow-lg text-center"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />

              <button
                type="submit"
                className="border focus:outline-none bg-gradient-to-r from-purple-300 to-purple-400 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
              >
                Sign up
              </button>
              <div className="flex gap-2">
                <h1 className="text-md">Already Signed up?</h1>{" "}
                <Link to="/login">
                  <p className="underline underline-offset-8 text-red-600 text-md">
                    Log in
                  </p>
                </Link>
              </div>
            </>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;