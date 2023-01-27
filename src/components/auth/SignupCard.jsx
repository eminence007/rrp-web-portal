import React, { useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";

const handleClick = () => {
  fetch(
    "https://www.googleapis.com/drive/v2/files/1LAQxES9mXlJMY22kD5Z5aQ3tk2nMd6Fm"
  )
    .then((res) => res.text())
    .then((data) => console.log(data));
};

const SignupCard = () => {
  const [voterid, setVoterid] = useState("");
  return (
    <Container className="my-3">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
        <p className="m-auto"><a href="/login">Login</a> if already a member</p>
          <Card className="mt-3">
            <Card.Body>
              <Form className="my-3">
                <Form.Group className="mb-3" controlId="voterid">
                  <Form.Control
                    type="text"
                    placeholder="Enter voterid"
                    value={voterid}
                    onChange={(e) => {
                      let value = e.target.value;
                      value = value.replace(/[^A-Za-z0-9]/gi, "");
                      setVoterid(value);
                    }}
                  />
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
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    As a party member are you comfortable in making your phone
                    number public ?
                  </Form.Label>
                  <div key="inline-radio" className="mb-3">
                    <Form.Check
                      inline
                      name="noobjection"
                      id="noobjection"
                      type="radio"
                      label="Yes"
                    />
                    <Form.Check
                      inline
                      name="noobjection"
                      id="noobjection"
                      type="radio"
                      label="No"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phnum">
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="primary"
                    type="button"
                    className="btn-block"
                    onClick={handleClick}
                    disabled={true}
                  >
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
