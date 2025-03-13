import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Badge, Button } from "@radix-ui/themes";
import {
  BookmarkFilledIcon,
  Crosshair2Icon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Tooltip from "../../Components/Tooltip/Tooltip";
import { useNavigate } from "react-router-dom";
const Header2 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");

  const OnhandleClick = (buttonName) => {
    setActiveTab(buttonName);
    navigate("/");
  };

  return (
    <div className="browser-header-side">
      <div className="header-objects">
        <Tooltip name={"Search"}>
          <button
            className="button-styles"
            style={{ backgroundColor: "white" }}
          >
            <MagnifyingGlassIcon color="black" width={24} height={24} />
          </button>
        </Tooltip>

        <Tooltip name={"Home"}>
          <button
            className="button-styles"
            onClick={() => OnhandleClick("Home")}
            style={{
              backgroundColor: activeTab === "Home" ? "white" : "transparent",
            }}
          >
            <HomeIcon
              color={activeTab === "Home" ? "black" : "white"}
              width={24}
              height={24}
            />
          </button>
        </Tooltip>

        <Tooltip name={"Catalog"}>
          <button
            className="button-styles"
            onClick={() => OnhandleClick("Catalog")}
            style={{
              backgroundColor:
                activeTab === "Catalog" ? "white" : "transparent",
            }}
          >
            <Crosshair2Icon
              color={activeTab === "Catalog" ? "black" : "white"}
              width={24}
              height={24}
            />
          </button>
        </Tooltip>

        <Tooltip name={"WatchList"}>
          <button
            className="button-styles"
            onClick={() => OnhandleClick("WatchList")}
            style={{
              backgroundColor:
                activeTab === "WatchList" ? "white" : "transparent",
            }}
          >
            <BookmarkFilledIcon
              width={24}
              height={24}
              color={activeTab === "WatchList" ? "black" : "white"}
            />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header2;
