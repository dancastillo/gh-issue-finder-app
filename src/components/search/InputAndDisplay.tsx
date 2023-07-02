import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Inputs } from '../../types'
import Display from '../shared/Display'
import Input from '../shared/Input'

const InputAndDisplay = ({ placeholder, btnText, values, setValues, limit, choices, applyChoice }: Inputs) => {

  return (
    <>
      <Input placeholder={placeholder} btnText={btnText} values={values} setValues={setValues} limit={limit} choices={choices} applyChoice={applyChoice} />
      <Display values={values} setValues={setValues} limit={limit} />
    </>
  )
}

export default InputAndDisplay
