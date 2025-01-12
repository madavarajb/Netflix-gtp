import React, { useRef, useState } from "react";
import { ImageLinks } from "../Images/ImageLinks";
import Header from "./Header";
import { Formvalidation } from "../Utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { adduser } from "../Utils/UserSlice";
import { useDispatch } from "react-redux";

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
    <div>
      <Header />
      <div className="absolute w-full h-screen">
        <img
          src={ImageLinks.Banner}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-xl"
      >
        <h1 className="text-3xl font-bold py-4">
          {issignin ? "Sign In" : "Sign Up"}
        </h1>
        {!issignin && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <p className="font-semibold text-red-500 ">{errormessage}</p>
        <button
          onClick={onsubmit}
          className=" p-2 my-4 w-full bg-red-700 rounded-lg"
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer " onClick={togglebutton}>
          {issignin ? "New to Filmiflixx? Sign up" : "Already member? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
