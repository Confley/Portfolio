import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CustomTooltip from "./CustomTooltip";

function Footer() {
  const [copyMail, setCopyMail] = useState(false);

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
          <h3>Forked from soumyajit4419</h3>
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
              <CustomTooltip
                message={copyMail ? "Copiado" : "Copiar mail"}
                placement="top"
                delay={{ hide: copyMail ? 4200 : 0 }}
              >
                <span
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => {
                    setCopyMail(true);
                    navigator.clipboard.writeText(
                      "torres.esparza.95@gmail.com"
                    );
                    setTimeout(() => setCopyMail(false), 5000);
                  }}
                >
                  <SiGmail />
                </span>
              </CustomTooltip>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
