import React from 'react'
import uuid from 'react-uuid'
import { IssueObject, IssuesProps } from '../../types';
import Issue from './Issue';

const Issues = ({ issues }: IssuesProps) => {
  return (
    <>
      {issues.map((issue: IssueObject) => (<Issue key={uuid()} issue={issue} />))}
    </>
  )
}

export default Issues;
