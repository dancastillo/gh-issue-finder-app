import React from 'react'
import { Displays } from '../../types'
import Display from '../shared/Display'
import Input from '../shared/Input'

const Label = ({ values, setValues }: Displays) => {
  return (
    <>
      <Input placeholder="Add label" btnText="Add" values={values} setValues={setValues}/>
      <Display values={values} setValues={setValues} />
    </>
  )
}

export default Label
