import React from "react";
import Card from "react-bootstrap/Card";
import { TbPointFilled } from "react-icons/tb";

function description() {
  return (
    <>
      Hello everyone, I am <strong className="purple">José de Jesús </strong>
      from <strong className="purple">Aguascalientes, Mexico</strong>. I just
      finished my <strong className="purple"> ICT Engineering </strong> degree.
      <br />
      <br />I like to improve and you will always see me{" "}
      <strong className="purple">learning something new</strong>.
      <br />
      <br />
      Some of my hobbies are:
    </>
  );
}

const hobbies = ["Video games", "Sudoku puzzles", "Trading", "Going for a run"];

function list() {
  return (
    <>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <li
              className="about-activity"
              key={index}
            >
              <TbPointFilled />
              <strong className="purple"> {hobby} </strong>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>{description()}</p>

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
