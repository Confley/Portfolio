import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CustomTooltip = ({
  children,
  message,
  placement = "bottom",
  delay = {},
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip id="custom-tooltip">{message}</Tooltip>}
      delay={delay}
    >
      {children}
    </OverlayTrigger>
  );
};

export default CustomTooltip;
