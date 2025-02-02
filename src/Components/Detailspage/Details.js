import React from "react";
import "./Details.scss";
import DetailHeader from "./DetailHeader";
import { AspectRatio, Badge, Button, Flex, Separator } from "@radix-ui/themes";
import {
  CheckIcon,
  RocketIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import useMovieDetails from "../../Custom hooks/useMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { ImageLinks } from "../../Images/ImageLinks";
import Header from "../Header/Header";
import { addMovies } from "../../Utils/WatchlistSlice";

const Details = () => {
  const details = useSelector((store) => store?.movies?.movieDetails);
  const dispatch = useDispatch();
  console.log("whats it===>", details);

  useMovieDetails(); //api call

  const handlewatchlistbutton = (details) => {
    dispatch(addMovies(details.poster_path));
  };

  return (
    <div className="details-page">
      {/* <Header /> */}
      <DetailHeader />
      <div className="conatiners"></div>
      <div className="movie-detail-container">
        <AspectRatio ratio={16 / 8}>
          <img
            src={ImageLinks.CDN_IMAGE_LINK2 + details?.backdrop_path}
            className="detail-banner"
            alt=""
            style={{
              objectFit: "cover",
              width: "70%",
              height: "50%",
              marginLeft: "15%",
              marginTop: "10%",
              borderRadius: "20px",
            }}
          />
        </AspectRatio>
      </div>
      <div className="cover-overlay"></div>
      <div className="detail-movie-cards">
        <img
          src={ImageLinks.CDN_IMAGE_LINK2 + details?.poster_path}
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "250px",
            height: "350px",
            marginLeft: "15%",
            marginTop: "10%",
            borderRadius: "20px",
          }}
        />
        <div className="details-box-1">
          <h1 className="movie-detail-title">{details?.title}</h1>
          <div
            style={{
              marginTop: "-5px ",
            }}
          >
            <Flex gap="3" align="center">
              Runtime: {details?.runtime}mins
              <Separator orientation="vertical" color="orange" />
              Language:{" "}
              {details?.spoken_languages.map((name) => (
                <span>{name.english_name || ""}</span>
              ))}
              <Separator orientation="vertical" color="orange" />
              Status: {details?.status}
              <Separator orientation="vertical" color="orange" />
              Rating: {parseFloat(details?.vote_average).toFixed(2)}
            </Flex>
          </div>

          <div style={{ paddingTop: "15px" }}>
            <Flex align="center" gap="2">
              {details?.genres.map((genre) => (
                <Badge size="3" variant="solid" color="gray" key={genre?.id}>
                  {genre?.name || ""}
                </Badge>
              ))}
            </Flex>
          </div>
        </div>
        <div className="details-midddle-box">
          <Flex gap="3" align="center">
            <Button
              size="3"
              variant="solid"
              color="orange"
              style={{
                width: "200px",
                height: "50px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => handlewatchlistbutton(details)}
            >
              <RocketIcon width={24} height={24} />
              WatchList
            </Button>
            <Button
              size="3"
              variant="solid"
              color="orange"
              style={{
                width: "200px",
                height: "50px",
                fontSize: "20px",
              }}
            >
              <CheckIcon width={24} height={24} />
              Seen
            </Button>
            <Button
              size="3"
              variant="solid"
              color="orange"
              style={{ width: "200px", height: "50px", fontSize: "20px" }}
            >
              <StarIcon width={24} height={24} color="yellow" />
              Favourites
            </Button>
          </Flex>
        </div>
        <div className="details-box-2">
          <h2 style={{ color: "white" }}>Overview</h2>
          <p>{details?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
