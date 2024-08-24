import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiMysql, SiFirebase } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";

const techStackIcons = [
  { icon: <DiReact />,      tooltip: "React.js",  },
  { icon: <FaHtml5 />,      tooltip: "HTML",      },
  { icon: <FaCss3Alt />,    tooltip: "CSS",       },
  { icon: <DiJavascript1 />,tooltip: "JavaScript",},
  { icon: <FaNode />,       tooltip: "Node.js",   },
  { icon: <SiFirebase />,   tooltip: "Firebase",  },
  { icon: <SiMysql />,      tooltip: "MySQL",     },
  { icon: <DiJava />,       tooltip: "Java",      },
  { icon: <FiGithub />,     tooltip: "GitHub",    },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackIcons.map(({ icon, tooltip }, key) => (
        <Col key={key} xs={4} md={2} className="tech-icons" title={tooltip}>
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
