import React, { useEffect } from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { adduser, removeuser } from "../../Utils/UserSlice";
import { Button, DropdownMenu, Grid } from "@radix-ui/themes";
import {
  DoubleArrowDownIcon,
  ExitIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className={`page-header-bar ${user ? "browser-header" : ""}`}>
        <img
          src={ImageLinks.Logo}
          alt="logo"
          className={`page-logo ${user ? "browser-page-logo" : ""}`}
        />
        {!user && (
          <p className="moto">
            A movie storage with lots of Suggestions to make you entertained
          </p>
        )}
        {user && (
          <div>
            <div className="dropdown-area">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <HamburgerMenuIcon width={30} height={30} />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  style={{
                    width: "200px",
                    height: "100%",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <DropdownMenu.Item>WatchList</DropdownMenu.Item>
                  <DropdownMenu.Item>Favorites</DropdownMenu.Item>
                  <DropdownMenu.Item>Comming Soon</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item
                    shortcut={<ExitIcon color="white" />}
                    onClick={handlesignout}
                  >
                    signout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            {/* <div className="sign-out">
              <button onClick={handlesignout} className="sign-out-button">
                Sign out
              </button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
