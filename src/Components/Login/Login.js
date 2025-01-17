import React, { useRef, useState } from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import Header from "../Header/Header";
import { Formvalidation } from "../../Utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { adduser } from "../../Utils/UserSlice";
import { useDispatch } from "react-redux";
import "./Login.scss";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [issignin, setissignin] = useState(true);
  const [errormessage, seterrormessage] = useState();
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglebutton = () => {
    setissignin(!issignin);
  };

  const onsubmit = () => {
    const message = Formvalidation(
      email.current.value || "",
      password.current.value || "",
      issignin ? "" : name.current.value || "",
      !issignin
    );
    seterrormessage(message);
    if (message) return;

    if (!issignin) {
      //SIGN-UP LOGIC
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                adduser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log("User====>", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage);
        });
    } else {
      //SIGN-IN LOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user=======>", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-section">
        <Header />
      </div>
      <div className="right-section">
        {/* <img
          src={ImageLinks.cartoon1}
          alt="no image"
          className="cartoon"
          style={{ width: "35%", height: "25%" }}
        ></img> */}
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()} className="login-form">
            <h1>{issignin ? "Sign In" : "Sign Up"}</h1>
            {!issignin && (
              <input ref={name} type="text" placeholder="Enter Name" />
            )}
            <input ref={email} type="email" placeholder="Enter Email" />
            <input ref={password} type="password" placeholder="Password" />
            <p className="error-message">{errormessage}</p>
            <button onClick={onsubmit} className="login-button">
              {issignin ? "Sign In" : "Sign Up"}
            </button>
            <p className="signup-page-toogle" onClick={togglebutton}>
              {issignin
                ? "New to Filmiflixx? Sign up"
                : "Already member? Sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
