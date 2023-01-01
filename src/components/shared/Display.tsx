import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import uuid from 'react-uuid'
import { Displays } from '../../types'

const Display = ({ values, setValues}: Displays) => {
  const removeDisplay = (remove: string) => {
    const updated = values.filter((value: string) => value !== remove)
    setValues(updated)
  }

  return (
    <Row className="pb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <Row>
          {values.map((value: string)=> (
            <Col key={uuid()}>
              {value}
              <div className="close" onClick={() => removeDisplay(value)}></div>
            </Col>
            )
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default Display
