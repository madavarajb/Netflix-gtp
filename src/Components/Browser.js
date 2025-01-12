import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageLinks } from "../Images/ImageLinks";

const Browser = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src={ImageLinks.ProgressBanner}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-0 left-0 w-full p-4 z-10 text-white ">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl text-white">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-lg">
              Hello {user.displayName},this page is currently under construction
            </p>
            <button
              onClick={handlesignout}
              className="mt-2 bg-red-500 text-white p-2 rounded"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
