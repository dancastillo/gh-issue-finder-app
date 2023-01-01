import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IssueProject } from '../../types';

const ProjectRow = ({ project, url }: { project: IssueProject | undefined, url: string }) => {
  if (project && project.name) {
    return (
      <Row>
        <Col sm={{ offset: 1, span: 3 }}>
        Repository: 
       </Col> 
       <Col>
          <Card.Link href={url}>
            {project.name}
          </Card.Link>
        </Col>
      </Row>
    )
  }
  return null
}

export default ProjectRow
