import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { getIssues } from '../api';
import { IssueObject } from '../types';
import Issue from './Issue';

const Issues = () => {
  const [issues, setIssues] = useState<IssueObject[]>([])

  useEffect(() => {
    const getAndSetIssues = async () => {
      const { results } = await getIssues();
      setIssues(results);
    }
    getAndSetIssues()
  }, [])
  
  const key = uuid()

  return (
    <>
      {issues.map((issue: IssueObject) => (<Issue key={key} issue={issue} />))}
    </>
  )
}

export default Issues;
