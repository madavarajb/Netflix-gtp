import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageLinks } from "../../Images/ImageLinks";
import "./Broser.scss";

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
    <div className="page-not-found">
      <img src={ImageLinks.ProgressBanner} alt="banner" className="banner" />
      <div className="overlay"></div>

      <div className="content">
        <div className="text-center">
          <h1>404</h1>
          <p className="text-xl">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-lg">
            Hello {user.displayName}, this page is currently under construction.
          </p>
          <button onClick={handlesignout}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Browser;
