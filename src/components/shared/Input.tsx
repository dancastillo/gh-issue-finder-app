import React, { ChangeEvent, MouseEvent, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Inputs } from '../../types'

const LabelInput = ({ placeholder, btnText, values, setValues }: Inputs) => {
  const [value, setValue] = useState<string>('')

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const addValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (value && value.trim() !== '') {
    const updatedLabels = new Set([
      ...values,
      value,
    ])
      setValues(Array.from(updatedLabels))
    }
    setTimeout(() => setValue(''))
  }
  return (
    <Row className="pb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <InputGroup>
          <Form.Control
            placeholder={placeholder}
            onChange={updateValue}
            value={value}
          />
          <Button onClick={addValue}>
            {btnText}
          </Button>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default LabelInput
