// import React, { useState } from "react";
// import { Button, Col, Collapse, Row } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import Card from "react-bootstrap/Card";
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const Novedad = () => {
  const version = 'v1.5'
  const date = '10 / Dic / 2024'
  const information =
    'Primer lanzamiento de la herramienta. \nEsto es un parrafo adicional que se esta pintando a manera de prueba. '
  const features = [
    'Dos modos de operación (Compra / Venta).',
    'Dos modos de riesgo (Porcentaje / lote fijo).',
    'Cálculo de riesgo automático.',
    'Panel de información de la operación.',
    'Input para limitar la cercanía entre los límites de la operación y el precio.',
    'Restricción para no operar si se superan los límites de riesgo.'
  ]

  const [open, setOpen] = useState(false)

  return (
    <>
      <Row
        className='bg-dark text-white'
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-text'
        aria-expanded={open}
        // style={{ cursor: "default", justifyContent: "left", display: "flex" }}
      >
        click
      </Row>
      <Row>
        <Collapse
          in={open}
          // id="example-collapse-text"
        >
          <div className='bg-primary text-left'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </Row>
    </>
  )
}

export default Novedad
