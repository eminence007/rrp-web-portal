import React,{useState} from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import ImageCropBtn from "../ui/ImageCropBtn";
const ProfilePicUploader = (props) => {
  const [profilePic, setProfilePic] = useState("http://simpleicon.com/wp-content/uploads/user-5.png");
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Header>Profile picture upload</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3 d-flex">
                  <img
                    className="img-fluid mx-auto border border-secondary"
                    src={profilePic}
                  ></img>
                </Form.Group>
                <ButtonGroup className="d-flex mb-3">
                  <ImageCropBtn onSave={setProfilePic}/>
                </ButtonGroup>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="button" className="btn-block" onClick={()=>props.handleNext(4)}>
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

export default ProfilePicUploader;
