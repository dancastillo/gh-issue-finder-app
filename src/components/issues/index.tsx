import React from 'react'
import uuid from 'react-uuid'
import { IssueObject, IssuesProps } from '../../types';
import Issue from './Issue';

const Issues = ({ issues }: IssuesProps) => {
  const getCount = () => {
    if (issues && issues.length) {
      return (
        <h5 className="text-center p-3">Number of issues: {issues.length}</h5>
      )
    }
    return null
  }
  return (
    <>
      {getCount()}
      {issues && issues.length && issues.map((issue: IssueObject) => (<Issue key={uuid()} issue={issue} />))}
    </>
  )
}

export default Issues;
