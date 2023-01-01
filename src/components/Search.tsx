import React, { useState } from 'react'
import Label from '../components/label'
import Project from '../components/project'

const Search = () => {
  const [projects, setProjects] = useState<string[]>([])
  const [labels, setLabels] = useState<string[]>([])
  return (
    <>
      <Project values={projects} setValues={setProjects} />
      <Label values={labels} setValues={setLabels} />
    </>
  )
}

export default Search 
