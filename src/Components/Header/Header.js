import React from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import "./Header.scss";

const Header = () => {
  return (
    <div className="page-header-bar">
      <img src={ImageLinks.Logo} alt="logo" className="page-logo" />
      <p className="moto">
        A movie storage with lots of Suggestions to make you entertained
      </p>
    </div>
  );
};

export default Header;
