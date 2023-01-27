import React from 'react'
import {
    Card,
    Container,
    Form,
    Button,
    Row,
    Col,
    ButtonGroup,
  } from "react-bootstrap";

const CurrentLocationForm = (props) => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Header><h6>Current location details</h6></Card.Header>
            <Card.Body>
              <Form>
                <p className="mb-3">
                  Enter the details of location from where you live now
                </p>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="permanet-state">
                    <option>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="permanet-district">
                    <option>District</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="permanet-loksabha">
                    <option>Loksabha Constituency</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="permanet-assembly">
                    <option>Assembly Constituency</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="permanet-pincode">
                  <Form.Control
                    type="number"
                    min={100001}
                    max={999999}
                    placeholder="Pincode"
                  />
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="button" className="btn-block" onClick={()=>props.handleNext(3)}>
                    Next
                  </Button>
                </ButtonGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CurrentLocationForm