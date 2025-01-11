import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import uiImg from "../../../Assets/Projects/interfaz_mt4_sin_fondo.png";
import { TbPointFilled } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import Video from "./YouTubeVideo";
import ToggleContent from "../../ToggleContent";
import SocialMedia from "../../SocialMedia";

const MT4UI = () => {
  // const VideoDeYoutube = "ap6E0-rgL_U";
  const VideoDeYoutube = "wf8cAcj3Vqo";
  // https://youtu.be/kvn8N8HTqGE?si=rTa3Qc6OaEZ-M4c0
  // https://youtu.be/ap6E0-rgL_U
  // https://www.youtube.com/watch?v=wf8cAcj3Vqo -> Inglés

  const resume =
    "UI MT4 is a tool designed to facilitate the execution of trades in MetaTrader 4. Its intuitive interface allows you to dynamically adjust Stop Loss and Take Profit and to clearly visualize the risk before executing a trade.";

  const beneficios = [
    "Optimize risk management",
    "Facilitate decision making",
    "Improve accuracy in operations",
    "Provide an interactive experience",
    "Automate key calculations",
    "Automate key calculations",
  ];

  const instrucciones = [
    "One click on '-' to minimize or maximize. ",
    "One click on 'Sell' to switch between buy and sell. ",
    "Double click on 'Sell' to open a trade. ",
    "Use the arrows to increase or decrease the lot value",
    "Double click on 'Confirm' to send trade. ",
    "The minimum percentage that can be set is 0.50%. ",
    "The lines do not exceed a range of distance between the price and the lines. ",
  ];

  return (
    <>
      <Container
        fluid
        className="uimt4-section"
      >
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
                <>
                  User Interface to
                  <strong className="purple"> MetaTrader 4</strong>
                </>
              </h1>

              <Card className="quote-card-view">
                <Card.Body>
                  <div className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>{resume}</p>

                    {beneficios.map((value, index) => {
                      return (
                        <li
                          className="about-activity"
                          key={index}
                          style={{ padding: "5px", fontSize: "1rem" }}
                        >
                          <TbPointFilled />
                          <strong className="purple"> {value} </strong>
                        </li>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "25px", paddingBottom: "80px" }}
              className="about-img"
            >
              <Tilt>
                <img
                  src={uiImg}
                  alt="about"
                  className="img-fluid"
                />
              </Tilt>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
            <h1 className="project-heading">
              <strong className="purple"> Instructions </strong> for use
            </h1>

            <Col
              md={6}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Video url={VideoDeYoutube} />
              <p
                style={{ paddingTop: "20px", cursor: "pointer" }}
                className="purple"
                onClick={() =>
                  window.open(
                    "https://www.mql5.com/es/market/product/128074?source=Site+Market+MT4+Utility+New+Rating006"
                  )
                }
              >
                📦 Available in the MQL5 market 📦
              </p>
            </Col>

            <Col
              md={6}
              style={{
                paddingTop: "45px",
                paddingBottom: "50px",
              }}
            >
              <>
                {instrucciones.map((value, index) => {
                  return (
                    <li
                      className="about-activity"
                      key={index}
                      style={{ padding: "5px" }}
                    >
                      <TbPointFilled className="purple" />
                      <strong> {value} </strong>
                    </li>
                  );
                })}
              </>
            </Col>
          </Row>

          <Row>
            <Col
              md={12}
              className="home-about-social"
            >
              <p style={{ fontSize: "20px" }}>
                Your opinion is <span className="purple">essential </span>to
                continue <span className="purple">improving </span> this tool!
              </p>

              <SocialMedia />
            </Col>
          </Row>

          <Row
            style={{
              justifyContent: "left",
              paddingBottom: "160px",
              paddingTop: "100px",
            }}
          >
            <h1 className="project-heading">
              News and <strong className="purple"> updates </strong>
            </h1>
            <Row
              style={{
                display: "flex",
                justifyContent: "left",
                alignContent: "left",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <ToggleContent />
            </Row>
          </Row>
        </Container>
        <Particle />
      </Container>
    </>
  );
};

export default MT4UI;
