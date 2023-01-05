import React from 'react'
import { Inputs } from '../../types'
import Display from '../shared/Display'
import Input from '../shared/Input'

const InputAndDisplay = ({ placeholder, btnText, values, setValues, limit }: Inputs) => {
  return (
    <>
      <Input placeholder={placeholder} btnText={btnText} values={values} setValues={setValues} limit={limit}/>
      <Display values={values} setValues={setValues} limit={limit} />
    </>
  )
}

export default InputAndDisplay
