import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";
import { SiMysql, SiFirebase, SiXampp } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const techStackIcons = [
  { icon: <DiReact />, tooltip: "React.js" },
  { icon: <FaHtml5 />, tooltip: "HTML" },
  { icon: <FaCss3Alt />, tooltip: "CSS" },
  { icon: <DiJavascript1 />, tooltip: "JavaScript" },
  { icon: <FaNode />, tooltip: "Node.js" },
  { icon: <SiFirebase />, tooltip: "Firebase" },
  { icon: <SiMysql />, tooltip: "MySQL" },
  { icon: <DiJava />, tooltip: "Java" },
  { icon: <FiGithub />, tooltip: "GitHub" },
  { icon: <SiXampp />, tooltip: "Xampp" },
];

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStackIcons.map(({ icon, tooltip }, key) => (
          <Col
            key={key}
            xs={4}
            md={2}
            className="tech-icons"
          >
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!"
            >
              {icon}
            </a>
          </Col>
        ))}
      </Row>
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default Techstack;
