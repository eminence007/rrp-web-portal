import React, { useState } from "react";
import { Container, Card, Nav, Button } from "react-bootstrap";
import { FaBell} from "react-icons/fa"
import { GiClick} from "react-icons/gi"
import { HiUserGroup} from "react-icons/hi"
import {GoPerson} from "react-icons/go"

const ProfileCard = () => {
  const [cardstate, setCardstate] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCardstate(1);
  };
  return (
    <Container className="my-3">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="profile">
            <Nav.Item>
              <Nav.Link href="profile"><GoPerson/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link" onClick={handleClick}>
                <HiUserGroup/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled"><GiClick/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#new"><FaBell/></Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        {cardstate === 0 && (
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        )}
        {cardstate === 1 && (
          <Card.Body>
            <Card.Title>This is new tile</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default ProfileCard;
