import React from "react";
import { Button, Card } from "react-bootstrap";
// import { BsGithub } from "react-icons/bs";

const GassProjectCards = (props) => {
  return (
    <>
      <div className="box">
        <span></span>
        <div className="content">
          <h4> {props.title} </h4>
          <hr />
          <Card.Img
            src={props.imgPath}
            alt="card-img"
            style={{ borderRadius: "5%", marginBottom: "10px" }}
          />

          <div className="card-techs">
            {props.techs.map((tech) => {
              return (
                <Button
                  disabled
                  variant={tech.variant}
                  style={{
                    fontSize: "12px",
                    padding: "1px",
                    margin: "3px",
                    background: "#fff"
                  }}
                >
                  {tech.name}
                </Button>
              );
            })}
          </div>

          {/* <p> {props.description} </p> */}
          {/* <Button variant="primary" href={link} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default GassProjectCards;
