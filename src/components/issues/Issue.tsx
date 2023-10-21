import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IssueObject } from '../../types';
import ProjectRow from './ProjectRow';
import OrgaizationRow from './OrganizationRow';

const Issue = ({ issue }: { issue: IssueObject }) => {
  const { url, title, comments, project, labels, updated_at } = issue
  const formatDate = (date: string | Date) => {
    const d = new Date(date)
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
  }
  return (
    <Row className="pb-3">
      <Col md={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <Card.Text>{title}</Card.Text>
            <ProjectRow project={project} url={url} />
            <OrgaizationRow project={project} />
            <Card.Text className="pt-4">
              <i>Labels: </i>
              {labels.join(' | ')}
            </Card.Text>
            <Card.Text>
              <i>Number of Comments: </i>
              {comments}
            </Card.Text>
            <Card.Text>
              <i>Update at: </i>
              {formatDate(updated_at)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default Issue
