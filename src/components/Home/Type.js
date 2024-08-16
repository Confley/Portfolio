import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Cybersecurity Enthusiast",
          "API Developer",
          "Database Specialist",
          "Freelancer",
          "MERN Stack Developer",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
