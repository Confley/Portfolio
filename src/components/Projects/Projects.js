import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import GassProjectCards from "./GlassProjectCards";
import nutlifePage from "./../../Assets/Projects/Nutlife (page).png";
import digitalhypeLogo from "./../../Assets/Projects/dh logo.jpeg";
import cotprint from "./../../Assets/Projects/cotprint.png";
import cetac from "./../../Assets/Projects/cetac05.png";
import mql4Logo from "./../../Assets/Projects/mt4 logo.jpeg";
import mt4Ui from "./../../Assets/Projects/interfaz mt4.png";

function title() {
  return (
    <>
      <strong className="purple">My Recent </strong> Works
    </>
  );
}

function subTitle() {
  return <>Here are a fe projects I've worked on recently</>;
}

const projects = [
  {
    title: "NutLife",
    description:
      "A landing page to promote services.\n\n- Personal trainer \n- Nutrition plan\n- Consulting \n\nThe goal is to capture the attention of customers with an attractive and minimalist design. ",
    imgUrl: nutlifePage,
    techs: ["Next", "React", "EmailJS", "Tailwind CSS"],
    link: "https://nutlife.vercel.app/",
  },
  {
    title: "Ability Gamma",
    description:
      "Full-stack web project leader and developer.\n\nThis collects the skills and personality of employees or prospects in order to better manage and administer the resources available to the company for its clients projects.",
    imgUrl: digitalhypeLogo,
    techs: ["React", "Bootstrap", "Node", "Firebase", "API Rest"],
  },
  {
    title: "C. E. T. A. C",
    description:
      "This page was designed with the idea of ​​making the institution known to the public. \n\n Responsible for the implementation of the design, development of some sections, backend development and database management. ",
    imgUrl: cetac,
    techs: ["React", "Bootstrap", "CSS", "Node", "API Rest", "MySQL", "Xampp"],
  },
  {
    title: "User Interface to MT4",
    description:
      "This project was born with the aim of simplifying the management of operations in MetaTrader 4, offering an intuitive and efficient experience. \n\nEach function was designed to facilitate risk control and precision in operations, improving the trader's workflow.",
    imgUrl: mt4Ui,
    techs: ["MetaTrader 4", "MQL4"],
    page: "/metatrader-ui",
    // link: "https://confley.vercel.app/"
  },
  {
    title: "Indicators and Robots",
    description:
      "I developed various technical indicators and automated robots within the MetaTrader 4 environment for a number of clients. \n\nMy responsibilities are related to detailed understanding of user needs, abstraction of strategy logic, coding and rigorous testing of the products. ",
    imgUrl: mql4Logo,
    techs: ["MetaTrader 4", "MQL4"],
  },
  {
    title: "Shopping car",
    description:
      "I developed a shopping cart component for a joint project. \n\n This component was integrated into a copy of a website that was created with Opencart. \n\n PayPal payment integration was implemented. ",
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
              page={project.page}
              techs={project.techs}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
