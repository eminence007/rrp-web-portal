import React from "react";
import {
    Card,
    Container,
    Form,
    Button,
    Row,
    Col,
    ButtonGroup,
  } from "react-bootstrap";
const ElectionQuestionForm = (props) => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Header>
                Role selection questions
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    Can you be an election candidate for Right to Recall Party ?
                  </Form.Label>
                  <div key="inline-radio" className="mb-3">
                    <Form.Check
                      inline
                      name="govtjob"
                      id="govtjob"
                      type="radio"
                      label="Yes"
                      checked={true}
                    />
                    <Form.Check
                      inline
                      name="govtjob"
                      id="govtjob"
                      type="radio"
                      label="No"
                    />
                  </div>
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="button" className="btn-block" onClick={()=>props.handleNext(5)}>
                    Next
                  </Button>
                </ButtonGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ElectionQuestionForm;
