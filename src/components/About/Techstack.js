import React from "react";
import { Col } from "react-bootstrap";
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
      {techStackIcons.map(({ icon, tooltip }, index) => (
        <Col
          key={index}
          md={2}
          className="tech-icons"
        >
          <span
            data-tooltip-id="tech-stack-tooltip"
            data-tooltip-content={tooltip}
          >
            {icon}
          </span>
        </Col>
      ))}
      <Tooltip
        id="tech-stack-tooltip"
        variant="light"
        place="bottom"
        style={{
          padding: "2px",
        }}
      />
    </>
  );
}

export default Techstack;
