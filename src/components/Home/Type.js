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
          "Python Developer",
          "Trader", 
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
