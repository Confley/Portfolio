import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/avatar.png";
import Tilt from "react-parallax-tilt";
import SocialMedia from "../SocialMedia";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME
              <span className="blue"> INTRODUCE MYSELF </span>
            </h1>

            <p className="home-about-body">
              I am a<b className="blue"> full-stack developer </b>
              which means I take care of everything,
              <span className="gray"> from A to I of API. </span>
              Specialist in
              <b className="blue"> data base </b>
              <span className="gray">
                because someone has to organize all that relational data.
              </span>
              <br />
              <br />
              If there is a new framework it doesn't scare me;
              <span className="gray">
                Most likely it's already in my to-do stack.
              </span>
              <b className="blue"> Con Node, React y Firebase </b>
              as tools, I focus on understanding technical and business needs,
              <span className="gray">
                because I like nothing more than making code and business
                synchronize.
              </span>
              <br />
              <br />
              <b className="blue"> I'm always learning </b>
              which allows me to stay aware of emerging trends and provide
              solutions
              <span className="gray">
                that are as fresh as a freshly as lettuce.
              </span>
            </p>
          </Col>
          <Col
            md={3}
            className="myAvtar"
          >
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
          >
            <h1> FIND ME ON </h1>
            <p>
              Feel free to
              <span className="purple"> connect </span>
              with me
            </p>

            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
