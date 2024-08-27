import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
    >
      <Row>
        <Col
          md="4"
          className="footer-copywright"
        >
          <h3>Designed by Soumyajit Behera</h3>
        </Col>
        <Col
          md="4"
          className="footer-copywright"
        >
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col
          md="4"
          className="footer-body"
        >
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/confley"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/josé-de-jesús-torres-esparza-5834b2286"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/+524494605155"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappFill />
              </a>
            </li>
            <li className="social-icons">
              <span
                style={{ cursor: "pointer", color: "white" }}
                onClick={() => {
                  navigator.clipboard.writeText("torres.esparza.95@gmail.com");
                  alert("Texto copiado");
                }}
              >
                <SiGmail />
              </span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
