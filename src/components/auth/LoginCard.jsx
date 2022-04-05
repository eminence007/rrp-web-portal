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

const LoginCard = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Phone Number" />
                </Form.Group>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="submit" className="btn-block">
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
                  <Button variant="primary" type="submit" className="btn-block">
                    LOGIN
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

export default LoginCard;
