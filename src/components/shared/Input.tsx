import React, { ChangeEvent, MouseEvent, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Inputs } from '../../types'

const LabelInput = ({ placeholder, btnText, values, setValues, limit }: Inputs) => {
  const [value, setValue] = useState<string>('')

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    const project = event.target.value
    setValue(project)
    // if limit is one we automatically set this
    if (project && project !== '' && limit === 1) {
      set(project)
    }
  }

  const addValue = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (value && value !== '') {
      set(value)
      setTimeout(() => setValue(''))
    }
  }

  const set = (value: string) => {
    if (limit === 1) {
      setValues([value])
    } else {
      const updatedLabels = new Set([
        ...values,
        value,
      ])
      setValues(Array.from(updatedLabels))
    }
  }

  const getButton = () => {
    if (limit === 1) {
        return null
    }
    return (
      <Button onClick={addValue}>
        {btnText}
      </Button>
    )
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
          {getButton()}
        </InputGroup>
      </Col>
    </Row>
  )
}

export default LabelInput
