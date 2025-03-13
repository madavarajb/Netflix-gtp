import React from "react";
import "./Box.scss";
import { Text } from "@radix-ui/themes";

const Box = ({ title, back_drop }) => {
  return (
    <div
      className="box-component"
      style={{ backgroundImage: `url(${back_drop})`, backgroundSize: "cover" }}
    >
      <div className="box-name">
        <Text weight={"bold"} size={"6"}>
          {" "}
          {title}
        </Text>
      </div>
    </div>
  );
};

export default Box;
