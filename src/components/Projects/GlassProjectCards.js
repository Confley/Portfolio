import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GassProjectCards = (props) => {
  const navigate = useNavigate();

  function goToResource() {
    if (props.link) {
      window.open(props.link, "_blank");
    } else if (props.page) {
      navigate(props.page);
    }
  }

  return (
    <>
      <div
        className="box"
        onClick={() => goToResource()}
        style={{ cursor: props.page || props.link ? "pointer" : "default" }}
      >
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
