import React, { useState } from "react";
import { Row } from "react-bootstrap";

const ToggleContent = () => {
  const version = "v1.6";
  const date = "10 / Dic / 2024";
  const information = "First release of the tool. ";
  const features = [
    "Two modes of operation (Buy / Sell).",
    "Two risk modes (Percentage / fixed lot).",
    "Automatic risk calculation.",
    "Operation information panel.",
    "Input to limit the closeness between the limits of the operation and the price.",
    "Restriction not to operate if risk limits are exceeded.",
  ];

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="toggle-content"
      onClick={() => handleClick()}
    >
      <Row>
        <p>
          <strong>{version}</strong> <span>{date}</span>
        </p>
      </Row>
      {toggle && (
        <Row className={`content ${toggle && "animation"}`}>
          <h4 style={{ paddingTop: "10px" }}>
            <strong>{information}</strong>
          </h4>
          <ul
            className="home-about-social-links"
            style={{ marginLeft: "5%" }}
          >
            {features.map((value, index) => {
              return (
                <li key={index}>
                  {/* <TbPointFilled className="purple" /> */}
                  {value}
                </li>
              );
            })}
          </ul>
        </Row>
      )}
    </div>
  );
};

export default ToggleContent;
