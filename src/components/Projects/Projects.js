import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import GassProjectCards from "./GlassProjectCards";
import cetac from "./../../Assets/Projects/cetac05.png";
import digitalhypeLogo from "./../../Assets/Projects/dh logo.jpeg";
import cotprint from "./../../Assets/Projects/cotprint.png";
import mql4Logo from "./../../Assets/Projects/mt4 logo.jpeg";

function title() {
  return (
    <>
      <strong className="purple">Trabajos </strong> más recientes
    </>
  );
}

function subTitle() {
  return <>Algunos de mis proyectos</>;
}

const projects = [
  {
    title: "Ability Gamma",
    description:
      "Líder y desarrollador full-stack de proyecto web. \n\n Este recaba las habilidades y personalidad de los empleados o prospectos con la finalidad de gestionar y administrar mejor los recursos que dispone la empresa para los proyectos de sus clientes. ",
    imgUrl: digitalhypeLogo,
    techs: ["React", "Bootstrap", "Node", "Firebase", "API Rest"],
  },
  {
    title: "C. E. T. A. C",
    description:
      "Desarrollo en equipo de una página web institucional. \n\n Esta página fue diseñada con la idea de dar a conocer la institución al publico. \n\n Encargado de la implementación del diseño, desarrollo de algunos apartados, desarrollo de backend y gestión de base de datos. ",
    imgUrl: cetac,
    techs: ["React", "Bootstrap", "CSS", "Node", "API Rest", "MySQL", "Xampp"],
  },
  {
    title: "Indicadores y Robots",
    description:
      "Desarrollé diversos indicadores técnicos y robots automatizados dentro del entorno de MetaTrader 4 para algunos clientes. \n\n Mis responsabilidades estan relacionadas con el entendimiento detallado de las necesidades del usuario, abstracción de la lógica de estrategias, codificación y testing rigurozo de los productos. ",
    imgUrl: mql4Logo,
    techs: ["MetaTrader 4", "MQL4"],
  },
  {
    title: "Carrito de compras",
    description:
      "Desarrollé un componente de carrito de compras para un proyecto en conjunto. \n\n Este componente fue integrado en una copia de un sitio web que fue creado con Opencart. \n\n Se implemento la integración de pago vía PayPal. ",
    imgUrl: cotprint,
    techs: ["React", "Bootstrap", "CSS", "JavaScript", "PayPal"],
  },
];

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container>
        <h1 className="project-heading">{title()}</h1>
        <p style={{ color: "white" }}>{subTitle()}</p>
      </Container>

      <Row className="glassCard p-2">
        {projects.map((project, index) => (
          <Col
            sm
            key={index}
            className="glassCard-col p-2"
          >
            <GassProjectCards
              title={project.title}
              description={project.description}
              imgPath={project.imgUrl}
              link={project.link}
              techs={project.techs}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
