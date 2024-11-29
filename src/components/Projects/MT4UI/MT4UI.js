import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import uiImg from "../../../Assets/Projects/interfaz_mt4_sin_fondo.png";
import { TbPointFilled } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import Video from "./YouTubeVideo";

const MT4UI = () => {
  const VideoDeYoutube = "kvn8N8HTqGE?si=rTa3Qc6OaEZ-M4c0";
  // https://youtu.be/kvn8N8HTqGE?si=rTa3Qc6OaEZ-M4c0

  const beneficios = [
    "Optimizar la gestión de riesgo",
    "Facilitar la toma de decisiones",
    "Mejorar la precisión en las operaciones",
    "Proveer una experiencia interactiva",
    "Automatizar cálculos clave",
  ];

  return (
    <>
      <Container
        fluid
        className="uimt4-section"
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
                <>
                  <strong className="purple">Interfaz</strong>{" "}
                  {" para MetaTrader 4"}
                </>
              </h1>

              <Card className="quote-card-view">
                <Card.Body>
                  <div className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      {
                        "Trading Assistant MT4 es una herramienta diseñada para facilitar y optimizar la gestión de operaciones en MetaTrader 4. Su interfaz intuitiva permite ajustar Stop Loss y Take Profit de forma dinámica y visualizar el riesgo de manera clara antes de ejecutar una operación."
                      }
                    </p>

                    {beneficios.map((value, index) => {
                      return (
                          <li
                            className="about-activity"
                            key={index}
                            style={{ padding: "5px" }}
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
              style={{ paddingTop: "25px", paddingBottom: "50px" }}
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

          <Row style={{ justifyContent: "center", paddingBottom: "180px" }}>
            <h1 className="project-heading">
              <strong className="purple"> Características </strong>
            </h1>
            <>
              Detalles de la herramienta, cómo ayuda a los traders, y qué la
              hace única.
            </>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
            <h1 className="project-heading">
              <strong className="purple"> Manual </strong> de uso
            </h1>

            <Col
              md={6}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Video url={VideoDeYoutube}/>
            </Col>

            <Col
              md={6}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <>Guía o instrucciones de lo que tiene la interfaz</>
            </Col>
          </Row>

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "160px",
              paddingTop: "100px",
            }}
          >
            <h1 className="project-heading">
              <>
                Novedades y<strong className="purple"> actualizaciones </strong>
              </>
            </h1>
            <>
              Insertar todas las nuevas novedades, pero en una lista para que se
              vayan iterando las nuevas cosas
            </>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MT4UI;
