import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

function Home2() {
  const [copyMail, setCopyMail] = useState(false);

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="blue"> PRESENTARME </span>
            </h1>

            <p className="home-about-body">
              Soy un <b className="blue"> desarrollador full-stack </b> lo que
              significa que me encargo de todo,
              <span className="gray"> desde la A hasta la I de API</span>.
              Especialista en <b className="blue"> base de datos </b>
              <span className="gray">
                porque alguien tiene que organizar todos esos datos relacionales
              </span>
              .
              <br />
              <br />
              Si hay un nuevo framework no me asusta;{" "}
              <span className="gray">
                lo más probable es que ya este en mi stack de-pendientes
              </span>
              . <b className="blue"> Con Node, React y Firebase </b> como
              herramientas, me enfoco en entender las necesidades técnicas y
              empresariales,{" "}
              <span className="gray">
                porque nada me gusta más que hacer que el código y los negocios
                se sync-ronicen
              </span>
              .
              <br />
              <br />
              <b className="blue"> Siempre estoy aprendiendo</b>, lo que me
              permite estar al tanto de las tendencias emergentes y aportar
              soluciones{" "}
              <span className="gray">
                {" "}
                que son tan frescas como un commit recién hecho
              </span>
              .
            </p>
          </Col>
          <Col
            md={3}
            className="myAvtar"
          >
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
          >
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/confley"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/josé-de-jesús-torres-esparza-5834b2286"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+524494605155"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiWhatsappFill />
                </a>
              </li>
              <li className="social-icons">
                <span
                  className="icon-colour  home-social-icons"
                  style={{ cursor: "pointer" }}
                  data-tooltip-id="home-mail-tooltip"
                  data-tooltip-content={copyMail ? "Copiado" : "Copiar mail"}
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
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Tooltip
        id="home-mail-tooltip"
        place="bottom"
        variant="light"
        style={{
          padding: "4px",
        }}
      />
    </Container>
  );
}
export default Home2;
