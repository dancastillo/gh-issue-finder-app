import React, { useState, MouseEvent, useEffect } from 'react'
import InputAndDisplay from './InputAndDisplay'
import { getIssues } from '../../api'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SearchProps } from '../../types'

const Search = ({ setProps, setIssues }: SearchProps) => {
  const [projects, setProjects] = useState<string[]>([])
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    setProps({
      projects,
      labels,
    })
  }, [projects, labels])

  const searchForIssues = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIssues([])
    const { results } = await getIssues(projects, labels)
    setIssues(results)
  }

  return (
    <>
      <InputAndDisplay
        placeholder="Github Project"
        btnText="Add"
        values={projects}
        setValues={setProjects}
        limit={1}
      />
      <InputAndDisplay
        placeholder="Label"
        btnText="Add"
        values={labels}
        setValues={setLabels}
      />
      <Row className='pb-4'>
        <Col md={{ offset: 2, span: 8 }}>
          <button
            className="btn btn-primary"
            onClick={searchForIssues}
          >
            Search
          </button>
        </Col>
      </Row>
    </>
  )
}

export default Search 
