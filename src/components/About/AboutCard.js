import React from "react";
import Card from "react-bootstrap/Card";
import { TbPointFilled } from "react-icons/tb";

function description() {
  return <> 
    Buenas, yo soy <strong className="purple">José de Jesús </strong> 
    de <strong className="purple">Aguascalientes, México</strong>
    . Justo acabo de terminar la carrera de <strong className="purple">Ing. TIC's</strong>. 
    <br />
    <br />
    Me gusta mejorar y siempre me verás <strong className="purple">aprendiendo algo nuevo</strong>.
    <br />
    <br />
    Algunos de mis pasatiempos son: 
  </>;
}

const hobbies = ["Videojuegos", "Resolver sudokus", "Trading", "Salir a correr"];

function list() {
  return <>
    <ul>
      {hobbies.map((hobby, index) => {
        return (
          <li className="about-activity" key={index}>
            <TbPointFilled /> 
            <strong className="purple"> {hobby} </strong>
          </li>
        );
      })}
    </ul>
  </>
}

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {description()}
          </p>
          
          {list()}
          
          <p style={{ color: "#b6bfd3" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
