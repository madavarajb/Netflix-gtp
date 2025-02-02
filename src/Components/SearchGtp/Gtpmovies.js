import React, { useState } from "react";
import "./SearchGTP.scss";
import { Button, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import openai from "../../Utils/gtpconfig";
const Gtpmovies = () => {
  const [searchbar, setsearchbar] = useState();
  const handleSearch = (e) => {
    setsearchbar(e.target.value);
  };
  const handleClickSearch = async () => {
    setsearchbar();
    console.log("onnnclicked--->", searchbar);
    // make API Call

    const gtpResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchbar }],
      model: "gpt-3.5-turbo",
    });
    console.log("------->", gtpResult.choices);
  };

  return (
    <div className="gtpmovie-container">
      <div className="search-bar">
        <TextField.Root
          onChange={handleSearch}
          value={searchbar}
          style={{ width: "70%", height: "45px" }}
          placeholder="Search for the movie like you wish"
        >
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <Button
          color="red"
          onClick={handleClickSearch}
          style={{ width: "9%", height: "45px" }}
        >
          <MagnifyingGlassIcon height="30" width="30" />
        </Button>
      </div>
    </div>
  );
};

export default Gtpmovies;
