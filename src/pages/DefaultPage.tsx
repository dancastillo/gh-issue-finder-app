import React, { useState } from 'react'
import Issues from '../components/issues'
import Search from '../components/search'
import { GetIssuesProps, IssueObject } from '../types'

const DefaultPage = () => {
  const [_, setProps] = useState<GetIssuesProps>({ projects: [], labels: [] })
  const [issues, setIssues] = useState<IssueObject[]>([])
  return (
    <>
      <Search setProps={setProps} setIssues={setIssues} />
      <Issues issues={issues} />
    </>
  )
}

export default DefaultPage
