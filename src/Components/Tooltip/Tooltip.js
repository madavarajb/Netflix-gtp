import { Badge } from "@radix-ui/themes";
import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ children, name }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div className="tooltip-component">
      <div
        onMouseOver={() => setShowToolTip(true)}
        onMouseOut={() => setShowToolTip(false)}
      >
        {children}
      </div>

      <div className="badge-content">
        {showToolTip && (
          <Badge variant="solid" color="orange" size={"3"} radius="large">
            {name}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
