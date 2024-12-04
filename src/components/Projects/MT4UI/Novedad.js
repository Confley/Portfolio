import React from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const Novedad = () => {
  return (
    // className="tech-icons"
    <>
      <Accordion
        defaultActiveKey="0"
        className="purple"
      >
        <Accordion.Item eventKey="0" style={{ justifyContent: "end", alignContent: "end" }}>
          <Accordion.Header>
            <span
              className="btn"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <strong> v1.5 </strong>
            </span>
            <div> 01 / Dic / 2024</div>
          </Accordion.Header>
          <Accordion.Body>
            <p> Esto es un texto de prueba </p>
            <>
              <li style={{ backgroundColor: "yellow" }}> Interfaz desplegable. </li>
              <li> Dos modos de operación (Compra / Venta). </li>
              <li> Dos modos de riesgo (Porcentaje / lote fijo). </li>
              <li> Cálculo de riesgo automático. </li>
              <li> Panel de información de la operación. </li>
              <li>
                Input para limitar la cercanía entre los límites de la operación
                y el precio.
              </li>
              <li>
                Restricción para no operar si se superan los límites de riesgo.
              </li>
            </>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Novedad;

// **v1.5                                                          1 / 12 / 2024**

// - **Primer lanzamiento de la herramienta**

//     ---

//     - Interfaz desplegable.
//     - Dos modos de operación (Compra / Venta).
//     - Dos modos de riesgo (Porcentaje / lote fijo).
//     - Cálculo de riesgo automático.
//     - Panel de información de la operación.
//     - Input para limitar la cercanía entre los límites de operación y el precio.
//     - Restricción para no operar si se superan los límites de riesgo.
