import React from 'react'
import { Displays } from '../../types'
import Display from '../shared/Display'
import Input from '../shared/Input'

const Project = ({ values, setValues }: Displays) => {
  return (
    <>
      <Input placeholder="Github project" btnText="Find" values={values} setValues={setValues}/>
      <Display values={values} setValues={setValues} />
    </>
  )
}

export default Project
