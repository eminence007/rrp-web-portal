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

const handleClick =()=>{
  fetch(
    "https://www.googleapis.com/drive/v2/files/1LAQxES9mXlJMY22kD5Z5aQ3tk2nMd6Fm"
  ).then((res) => res.text()).then(data=>console.log(data));
}

const SignupCard = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Enter name on voter card"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="voterid">
                  <Form.Control type="text" placeholder="Enter voterid" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    Are you above 23 years of age ?
                  </Form.Label>
                  <div key="inline-radio" className="mb-3">
                    <Form.Check
                      inline
                      name="age"
                      id="age"
                      type="radio"
                      label="Yes"
                    />
                    <Form.Check
                      inline
                      name="age"
                      id="age"
                      type="radio"
                      label="No"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    Are you in any government job ?
                  </Form.Label>
                  <div key="inline-radio" className="mb-3">
                    <Form.Check
                      inline
                      name="govtjob"
                      id="govtjob"
                      type="radio"
                      label="Yes"
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
                <Form.Group className="mb-3" controlId="phnum">
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="button" className="btn-block" onClick={handleClick}>
                    Generate OTP
                  </Button>
                </ButtonGroup>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="OTP"
                    className="my-3"
                  />
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="button" className="btn-block">
                    Register
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

export default SignupCard;
