import React from "react";
import { Card } from "react-bootstrap";

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
              className="card-img mt-3"
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
                <button
                  disabled
                  size="sm"
                  // className="me-2"
                  key={tech}
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