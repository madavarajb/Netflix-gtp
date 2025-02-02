import React, { useEffect } from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { adduser, removeuser } from "../../Utils/UserSlice";
import { Button, DropdownMenu, Flex, Grid } from "@radix-ui/themes";
import {
  DoubleArrowDownIcon,
  ExitIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { togglegtp } from "../../Utils/GtpSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gtptogle = useSelector((store) => store?.gtp?.showGtp);
  const id = useSelector((store) => store?.movies?.movieDetails?.id);
  const watchlists = useSelector((store) => store?.watchlist?.movies);
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

  const handelwatchlist = () => {
    navigate("/watchlist");
  };

  const Handelopagetoggle = () => {
    dispatch(togglegtp());
    console.log("===> clicked");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid, email, displayName }));

        // Navigate only if the user is not already on the browse page
        if (
          window.location.pathname !== "/browse" &&
          window.location.pathname !== "/watchlist" &&
          window.location.pathname !== "/details"
        ) {
          navigate("/browse");
        }
      } else {
        dispatch(removeuser());

        // Navigate only if the user is not already on the home page
        if (window.location.pathname !== "/") {
          navigate("/");
        }
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
            <Flex gap="3" align="center">
              <Button
                size="3"
                variant="soft"
                onClick={Handelopagetoggle}
                style={{
                  backgroundColor: "purple",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {!gtptogle ? "Search GTP" : "Homepage"}
              </Button>
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
                    <DropdownMenu.Item onClick={handelwatchlist}>
                      WatchList({watchlists?.length})
                    </DropdownMenu.Item>
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
            </Flex>

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
