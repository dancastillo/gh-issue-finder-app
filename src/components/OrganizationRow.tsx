import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IssueProject } from '../types';

const OrgaizationRow = ({ project }: { project: IssueProject | undefined }) => {
  if (project && project.url) {
    return (
      <Row>
        <Col sm={{ offset: 1, span: 3 }}>
        Orgaization: 
       </Col> 
       <Col>
          <Card.Link href={project.url}>
            {project.org}
          </Card.Link>
        </Col>
      </Row>
    )
  }
  return null
}

export default OrgaizationRow
