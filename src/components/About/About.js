import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Home/about.png";

function title() {
  return (
    <>
    Know Who <strong className="purple">I'M</strong>
    </>
  );
}

function titleSkills() {
  return (
    <>
      Professional <strong className="purple">Skillset </strong>
    </>
  );
}

function About() {
  return (
    <Container
      fluid
      className="about-section"
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {title()}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
          <h1 className="project-heading">{titleSkills()}</h1>
          <Techstack />
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
          <Github />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
