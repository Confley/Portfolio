import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            
            <p className="home-about-body">
              Soy un <b className="blue"> desarrollador full-stack </b>
              {" "} lo que significa que me encargo de todo,<b className="gray"> desde la A hasta la I de API</b>. 
              Especialista en <b className="blue"> base de datos </b>
              <b className="gray">porque alguien tiene que organizar todos esos datos relacionales</b>. 
              <br />
              <br />
              
              Si hay un nuevo framework no me asusta; lo más probable es que ya este 
              en mi stack de-pendientes. <b className="blue"> Con Node, React y Firebase </b>
              {" "} como herramientas, me enfoco en entender las necesidades técnicas y empresariales, 
              porque nada me gusta más que hacer que el código y los negocios se sync-ronicen. 
              <br />
              <br />
              
              <b className="blue"> Siempre estoy aprendiendo </b>, lo que me permite estar al tanto 
              de las tendencias emergentes y aportar soluciones que son tan frescas como un commit recién hecho.
              
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
