import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import classes from './DraftGrid.module.css'

function DraftGrid() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']} >
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
            <Card>
              <Card.Body>
                <Card.Title>JuryCourt</Card.Title>
                <Card.Text>
                  A law to improve courts and police stations.
                </Card.Text>
                <DropdownButton variant="secondary" title="Download">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DraftGrid;
