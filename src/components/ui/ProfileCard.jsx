import React, { useState } from "react";
import { Container, Card, Nav, Row, Col } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { GoPerson } from "react-icons/go";

const ProfileCard = () => {
  const [cardstate, setCardstate] = useState(0);
  const handleClick = (cardNumber) => {
    setCardstate(cardNumber);
  };
  return (
    <Container className="my-3 mx-auto">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="profile">
            <Nav.Item>
              <Nav.Link href="profile" className="d-flex py-auto">
                <GoPerson className="my-auto me-1" />
                <span className="d-none d-sm-block"> Profile</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#link"
                className="d-flex py-auto"
                onClick={() => {
                  handleClick(1);
                }}
              >
                <HiUserGroup value={1} className="my-auto me-1" />
                <span className="d-none d-sm-block"> Members </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#disabled"
                className="d-flex py-auto"
                onClick={() => {
                  handleClick(2);
                }}
              >
                <GiClick className="my-auto me-1" />
                <span className="d-none d-sm-block"> Action</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#new" className="d-flex py-auto">
                <FaBell className="my-auto me-1" />
                <span className="d-none d-sm-block"> Notification</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        {cardstate === 0 && (
          <Card.Body className="px-1 ">
            <>
              <Container>
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 ml-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                        <img
                          className="card-img-top rounded-circle"
                          src="data:image/jpeg;base64,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"
                          alt="Card image cap"
                        />
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <h4 className="mx-auto mb-1">Amit Kumar Swain</h4>
                          <small className="mx-auto text-secondary">
                            Funder
                          </small>
                          <small className="text-secondary">Member ID</small>
                          <h6>219217390831093710</h6>
                          <small className="text-secondary">Voter ID</small>
                          <h6>FMD214597</h6>
                          <small className="text-secondary">Phone Number</small>
                          <h6>8888888888</h6>
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 ml-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                       
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 ml-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                       
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 ml-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                       
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 ml-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                       
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    xs={12}
                    md={12}
                    lg={3}
                    className="py-1 px-0 px-lg-2 mxl-2 my-1"
                  >
                    <Card>
                      <Card.Body>
                       
                        <div className="d-flex flex-column  mt-3 mb-2">
                          <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                              <small className="text-secondary">
                                State
                              </small>
                              <p>Odisha</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                District
                              </small>
                              <p>Sundargarh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-column">
                              <small className="text-secondary">
                                Loksabha
                              </small>
                              <p>Rourkela</p>
                            </div>
                            <div className="d-flex flex-column">
                            <small className="text-secondary">
                                Vidhansabha
                              </small>
                              <p>Uditnagar</p>
                            </div>
                          </div>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
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
        {cardstate === 2 && (
          <Card.Body>
            <Card.Title>This is new tile2</Card.Title>
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
