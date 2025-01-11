import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import CustomTooltip from "./CustomTooltip";

const SocialMedia = () => {
  const [copyMail, setCopyMail] = useState(false);

  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <CustomTooltip message={"GitHub"}>
          <a
            href="https://github.com/confley"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </CustomTooltip>
      </li>
      <li className="social-icons">
        <CustomTooltip message={"Linkedin"}>
          <a
            href="https://www.linkedin.com/in/josé-de-jesús-torres-esparza-5834b2286"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </CustomTooltip>
      </li>
      <li className="social-icons">
        <CustomTooltip message={"WhatsApp"}>
          <a
            href="https://wa.me/+524494605155"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <RiWhatsappFill />
          </a>
        </CustomTooltip>
      </li>

      <li className="social-icons">
        <CustomTooltip message={copyMail ? "Copied" : "Copy email"}>
          <span
            className="icon-colour home-social-icons"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCopyMail(true);
              navigator.clipboard.writeText("torres.esparza.95@gmail.com");
              setTimeout(() => setCopyMail(false), 5000);
            }}
          >
            <SiGmail />
          </span>
        </CustomTooltip>
      </li>
    </ul>
  );
};

export default SocialMedia;
