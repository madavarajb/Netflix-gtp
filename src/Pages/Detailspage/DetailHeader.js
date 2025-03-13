import React, { useEffect } from "react";
import "./Detailsheader.scss";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../../Utils/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Utils/Firebase";

const DetailHeader = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const details = useSelector((store) => store?.movies?.movieDetails);
  // console.log("id>>>", details?.id);
  const handleBackButton = () => {
    navigate("/browse");
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
  //       navigate("/details/");
  //     } else {
  //       dispatch(removeuser());
  //       navigate("/");
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <div>
      <div className="details-hearder-bar">
        <div classname="header-content">
          <div className="back-button" onClick={handleBackButton}>
            <ArrowLeftIcon width={30} height={30} />
            <span>Back</span>
          </div>
          {/* <div>
            <span>Watchlist</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
