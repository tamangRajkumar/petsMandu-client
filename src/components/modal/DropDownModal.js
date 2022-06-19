import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../actions/authActions";

const DropDownModal = ({ history }) => {
  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );

  const dispatch = useDispatch();

  const userLogOut = {};
  const handleLogOut = () => {
    window.localStorage.removeItem("authUser");
    dispatch(logOutUser(userLogOut));
    history.push("/login");
  };

  return (
    <>
      {" "}
      <div className="flex flex-col bg-gray-100 w-48   shadow-lg shadow-indigo-500/50 rounded-xl font-medium">
        {isAuthenticated ? (
          <Link to="user-dashboard">
            <div className="text-base hover:text-xl pl-3 pb-2 pt-4 border-b-2 border-gray-300 hover:bg-gray-300 rounded-t-xl py-2  ">
              Dashboard
            </div>
          </Link>
        ) : (
          <Link to="/">
            <div className="text-base hover:text-xl pl-3 pb-2 pt-4 border-b-2 border-gray-300 hover:bg-gray-300 rounded-t-xl py-2  ">
              PetsMandu
            </div>
          </Link>
        )}

        {isAuthenticated ? (
          <button onClick={handleLogOut} className=" focus:outline-none ">
            <div className=" pb-4  py-2  border-gray-300 hover:bg-gray-300 bg-gray-100 rounded-b-xl">
              <p className="text-base font-semibold text-left pl-6  ">
                Log Out
              </p>
            </div>
          </button>
        ) : (
          <>
            <Link to="/login">
              <div className="text-base transform hover:bg-gray-300 pl-6 py-2 ">
                Log In
              </div>
            </Link>

            <Link to="/signup">
              <div className="text-base pb-4 pl-6 py-2  border-gray-300 hover:bg-gray-300 bg-gray-100 rounded-b-xl">
                Sign Up
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default DropDownModal;
