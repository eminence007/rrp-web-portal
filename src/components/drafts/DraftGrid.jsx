import React from 'react';
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import DropsownList from './DropdownList';
import classes from './DraftGrid.module.css'
const draftdata = require('./draftdata.json')
function DraftGrid() {
  return (
    <>
      <Container>
        <Row>
          {draftdata.map(draft => <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>{draft.name}</Card.Title>
                <Card.Text>
                  Summery
                </Card.Text>
                <DropsownList items={draft.pdfLinks} />
              </Card.Body>
            </Card>
          </Col>)}
         
        </Row>
      </Container>
    </>
  );
}

export default DraftGrid;
