import React from "react";
import "./SearchGTP.scss";
import { Button, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const Gtpmovies = () => {
  return (
    <div className="gtpmovie-container">
      <div className="search-bar">
        <TextField.Root
          style={{ width: "70%", height: "45px" }}
          placeholder="Search for the movie like you wish"
        >
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <Button color="red" style={{ width: "9%", height: "45px" }}>
          <MagnifyingGlassIcon height="30" width="30" />
        </Button>
      </div>
    </div>
  );
};

export default Gtpmovies;
