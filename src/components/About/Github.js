import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function title() {
  return <> Días de <strong className="purple">codificación </strong> </>;
}

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {title()}
      </h1>
      <GitHubCalendar
        username="Confley"
        blockSize={15}
        blockMargin={5}
        color="#3754D4"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
