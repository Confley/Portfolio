import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { TbPointFilled } from 'react-icons/tb'

const ToggleContent = () => {
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

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div
      className='toggle-content'
      onClick={() => handleClick()}
    >
      <Row>
        <p>
          <strong>{version}</strong> <span>{date}</span>
        </p>
      </Row>
      {toggle && (
        <Row className={`content ${toggle && 'animation'}`}>
          <div style={{ padding: '20px' }}>{information}</div>
          <ul
            className='home-about-social-links'
            style={{ marginLeft: '25px' }}
          >
            {features.map((value, index) => {
              return (
                <div key={index} style={{ paddingBottom: '10px' }}>
                  <TbPointFilled className='purple' />
                  {value}
                </div>
              )
            })}
          </ul>
        </Row>
      )}
    </div>
  )
}

export default ToggleContent
