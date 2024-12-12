import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import CustomTooltip from "../CustomTooltip";
import { useTranslation } from "react-i18next";

function Home2() {
  const [copyMail, setCopyMail] = useState(false);
  const { t } = useTranslation();

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
              {t("home2.title1")}
              <span className="blue"> {t("home2.title1_1")} </span>
            </h1>

            <p className="home-about-body">
              {t("home2.sentence1")}
              <b className="blue"> {t("home2.sentence1_1")} </b>
              {t("home2.sentence1_2")}
              <span className="gray">{t("home2.joke1")}</span>
              {t("home2.sentence2")}
              <b className="blue">{t("home2.sentence2_1")}</b>
              <span className="gray">{t("home2.joke2")}</span>
              <br />
              <br />
              {t("home2.sentence3")}
              <span className="gray">{t("home2.joke3")}</span>
              <b className="blue">{t("home2.sentence4")}</b>
              {t("home2.sentence4_1")}
              <span className="gray">{t("home2.joke4")}</span>
              <br />
              <br />
              <b className="blue">{t("home2.sentence5")}</b>
              {t("home2.sentence5_1")}
              <span className="gray">{t("home2.joke5")}</span>
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
            <h1>{t("contact.title")}</h1>
            <p>
              {t("contact.subtext")}
              <span className="purple">{t("contact.strongText")}</span>
              {t("contact.subtext_1")}
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
                <CustomTooltip
                  message={copyMail ? t("tools.copied") : t("tools.copyMail")}
                  delay={{ hide: copyMail ? 4200 : 0 }}
                >
                  <span
                    className="icon-colour home-social-icons"
                    style={{ cursor: "pointer" }}
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
    </Container>
  );
}
export default Home2;
