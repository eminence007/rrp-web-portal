import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import classes from './ArticleStack.module.css'

function ArticleStack() {
  return (
    <Container>
      <Row>
        <Col lg={9} className={classes['row-gap']}>
        <Card className={classes['row-gap']}>
        <Card.Body>
          <Card.Title>JuryCourt</Card.Title>
          <Card.Text>A law to improve courts and police stations.</Card.Text>
          <Button variant="secondary">PDF Download </Button>{' '}
          <Button variant="secondary">Copy Link</Button>{' '}
        </Card.Body>
      </Card>
      <Card className={classes['row-gap']}>
        <Card.Body>
          <Card.Title>JuryCourt</Card.Title>
          <Card.Text>A law to improve courts and police stations.</Card.Text>
          <Button variant="secondary">PDF Download</Button>{' '}
          <Button variant="secondary">Copy Link</Button>{' '}
        </Card.Body>
      </Card>
      <Card className={classes['row-gap']}>
        <Card.Body>
          <Card.Title>JuryCourt</Card.Title>
          <Card.Text>A law to improve courts and police stations.</Card.Text>
          <Button variant="secondary">PDF Download</Button>{' '}
          <Button variant="secondary">Copy Link</Button>{' '}
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
     
  );
}

export default ArticleStack;
