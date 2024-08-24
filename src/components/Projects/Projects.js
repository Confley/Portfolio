import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import GassProjectCards from "./GlassProjectCards";

import abilityGammaImg from './../../Assets/Projects/abilityGamma.png';
import cetac from './../../Assets/Projects/cetac05.png'
import digitalhypeLogo from './../../Assets/Projects/dh logo.jpeg'
import logoCetac from './../../Assets/Projects/cetac logo.png'

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
      "Líder y desarrollador full-stack de proyecto web. \n\n Este recaba las habilidades y personalidad de los empleados/prospectos con la finalidad de gestionar y administrar mejor los recursos que disponen para los proyectos de sus clientes. ",
    imgUrl: digitalhypeLogo,
    isBlog: false,
    link: "https://leaf-plant-care.herokuapp.com/",
    techs: ["React", "Node", "Firebase", "API Rest"],
  },
  {
    title: "Institutional Page",
    description:
      "Líder y desarrollador full de proyecto web donde este recaba las habilidades y personalidad de los empleados/prospectos con la finalidad de gestionar y administrar mejor los recursos que disponen para los proyectos de sus clientes. ",
    imgUrl: cetac,
    isBlog: false,
    link: "https://leaf-plant-care.herokuapp.com/",
    techs: ["Firebase", "Node", "React", "SqlLite"],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{title()}</h1>
        <p style={{ color: "white" }}>{subTitle()}</p>
      </Container>

      <Row className="glassCard">
        {projects.map((project) => (
          <GassProjectCards
            title={project.title}
            description={project.description}
            imgPath={project.imgUrl}
            link={project.link}
            techs={project.techs}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
