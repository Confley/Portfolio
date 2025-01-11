import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const jobTypes = [
    "Ing. TIC's",
    "Full-Stack Developer",
    "MERN Stack",
    "API Developer",
    "Database Administrator",
    "Software Developer",
  ];

  return (
    <Typewriter
      options={{
        strings: jobTypes,
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
