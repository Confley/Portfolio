import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

const GassProjectCards = (props) => {
  return (
    <>
      <div className="box">
        {/* <span></span> */}
        <div className="content">
          <h4>{props.title}</h4>
          <hr />
          <div className="image-container">
            <Card.Img
              src={props.imgPath}
              alt="project-img"
              className="card-img"
            />
            <p
              className="card-description"
              style={{ whiteSpace: "pre-line" }}
            >
              {props.description}
            </p>
          </div>

          <div className="card-techs">
            {props.techs.map((tech) => {
              return (
                <Button
                  disabled
                  size="sm"
                  className="me-2"
                  key={tech}
                  variant="primary"
                >
                  {tech}
                </Button>
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
      return "#2874A6";
    case "node":
      return "#1E8449";
    case "express":
      return "#fff";
    case "mysql":
      return "#2874A6";
    case "firebase":
      return "#D68910";
    case "javascript":
      return "#F1C40F";
    case "python":
      return "#2980B9";
    case "java":
      return "#b07219";
    case "html":
      return "#D35400";
    case "css":
      return "#2980B9";
    default:
      return "#7B7D7D";
  }
};
