import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import GassProjectCards from "./GlassProjectCards";

const firebase   = {name: "firebase",  variant: "warning"}; 
const mysql      = {name: "mysql",     variant: "primary"}; 
const sqlLite    = {name: "sqlLite",   variant: "primary"}; 
const node       = {name: "node",      variant: "success"}; 
const express    = {name: "express",   variant: "dark"}; 
const react      = {name: "react",     variant: "light"}; 
const html       = {name: "html",      variant: "warning"}; 
const css        = {name: "css",       variant: "info"}; 
const javaScript = {name: "javaScript",variant: "warning"}; 
const python     = {name: "python",    variant: "primary"}; 
const java       = {name: "java",      variant: "light"}; 
const github     = {name: "github",    variant: "dark"}; 

function title() {
  return (
    <>
      <strong className="purple">Trabajos </strong> más recientes
    </>
  );
}

function subTitle() {
  return <>Algunos de mis proyectos más recientes</>;
}

const projects = [
  {
    title: "Leaf - Plant Care",
    description:
      "Leaf is a web application that allows users to monitor and control their plants' watering schedules. It uses a local database to store information about the plants, and a web interface to allow users to interact with the plants.",
    imgUrl: "https://picsum.photos/250/200/?random=1",
    isBlog: false,
    link: "https://leaf-plant-care.herokuapp.com/",
    techs: [firebase, node, react, sqlLite],
  },
  {
    title: "Emotion Detection",
    description:
      "Emotion is a web application that uses the Clarifai API to detect the emotion of people in images. It can detect emotions such as happiness, sadness, fear, anger, surprise, and disgust. The application also uses a web interface to allow users to interact with the images.",
    imgUrl: "https://picsum.photos/250/200/?random=2",
    isBlog: false,
    link: "https://emotion-detection.herokuapp.com/",
    techs: [firebase, mysql, express, python],
  },
  {
    title: "Code Editor",
    description:
      "Editor is a web application that allows users to write and edit code in a web interface. It uses the CodeMirror library to provide a rich text editor interface, and the Monaco Editor library to provide a code editor interface. The application also uses a web interface to allow users to interact with the code.",
    imgUrl: "https://picsum.photos/250/200/?random=3",
    isBlog: false,
    link: "https://code-editor-frontend.herokuapp.com/",
    techs: [firebase, html, css, javaScript],
  },
  {
    title: "Chat Application",
    description:
      "Chatify is a web application that allows users to chat with each other in real time. It uses a web interface to allow users to interact with each other, and a local database to store information about the chat.",
    imgUrl: "https://picsum.photos/250/200/?random=4",
    isBlog: false,
    link: "https://chatify-frontend.herokuapp.com/",
    techs: [firebase, github, java],
  },
  {
    title: "Suicide Prevention",
    description:
      "This is a web application that uses a local database to store information about suicide prevention. It uses a web interface to allow users to interact with the database, and a web hook to send notifications to users when a new entry is added to the database.",
    imgUrl: "https://picsum.photos/250/200/?random=5",
    isBlog: false,
    link: "https://suicide-prevention.herokuapp.com/",
    techs: [firebase],
  },
  {
    title: "Blog",
    description:
      "This is a web application that uses a local database to store information about blog posts. It uses a web interface to allow users to interact with the database, and a web hook to send notifications to users when a new post is added to the database.",
    imgUrl: "https://picsum.photos/250/200/?random=6",
    isBlog: false,
    link: "https://blog-frontend.herokuapp.com/",
    techs: [firebase],
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
