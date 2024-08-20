import React from "react";
import { Card } from "react-bootstrap";

const GassProjectCards = (props) => {
  return (
    <>
      <div className="box">
        <span></span>
        <div className="content">
          <h4>{props.title}</h4>
          <hr />
          <div className="image-container">
            <Card.Img
              src={props.imgPath}
              alt="card-img"
              className="card-img"
            />
            <p className="card-description">{props.description}</p>
          </div>

          <div className="card-techs">
            {props.techs.map((tech) => {
              return (
                <button
                  key={tech}
                  disabled
                  style={{
                    fontSize: "12px",
                    padding: "1px",
                    margin: "3px",
                    borderRadius: "5px",
                    color: "#000000",
                    background: getTechColor(tech),
                  }}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GassProjectCards;

const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  switch (t) {
    case "react":
      return "#61dafb";
    case "node":
      return "#90c53d";
    case "express":
      return "#90c53d";
    case "mysql":
      return "#4479A1";
    case "firebase":
      return "#FFCA28";
    case "sqlLite":
      return "#003B4C";
    case "javascript":
    case "javaScript":
      return "#f0db4f";
    case "python":
      return "#306998";
    case "java":
      return "#b07219";
    case "html":
      return "#e34c26";
    case "css":
      return "#1572b6";
    default:
      return "#ffff";
  }
};
