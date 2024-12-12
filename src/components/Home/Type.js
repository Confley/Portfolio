import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();
  const jobTypes = t("home.type", { returnObjects: true });

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
