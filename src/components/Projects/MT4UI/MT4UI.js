import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import uiImg from "../../../Assets/Projects/interfaz_mt4_sin_fondo.png";
import { TbPointFilled } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import Video from "./YouTubeVideo";
import Novedad from "./Novedad";

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

  const instrucciones = [
    "Un click en '-' para minmizar o maximizar. ",
    "Un click en 'Sell' para cambiar entre compra y venta. ",
    "Doble click en 'Sell' para abrir una operación. ",
    "Usa las felchas para incrementar o decrementar el valor del lotaje",
    "Doble click en 'Confirmar' para envíar operación. ",
    "El porcentaje mínimo que se puede poner es 0.50%. ",
    "Las líneas no superan un rango de distancia entre el precio y las líneas. ",
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
                  <strong className="purple">Interfaz</strong>{" "}
                  {" para MetaTrader 4"}
                </>
              </h1>

              <Card className="quote-card-view">
                <Card.Body>
                  <div className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      {
                        "UI MT4 es una herramienta diseñada para facilitar la ejecución de operaciones en MetaTrader 4. Su interfaz intuitiva permite ajustar Stop Loss y Take Profit de forma dinámica y visualizar el riesgo de manera clara antes de ejecutar una operación."
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
              <strong className="purple"> Instrucciones </strong> de uso
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

          <Row
            style={{
              justifyContent: "left",
              paddingBottom: "160px",
              paddingTop: "100px",
            }}
          >
            <h1 className="project-heading">
              Novedades y<strong className="purple"> actualizaciones </strong>
            </h1>
            <Col
              style={{
                display: "flex", 
                justifyContent: "left",
                alignContent: "left", 
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Novedad />
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </>
  );
};

export default MT4UI;
