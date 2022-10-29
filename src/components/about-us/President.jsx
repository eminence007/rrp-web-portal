import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import parse from "html-react-parser";
import {apiBaseUrl} from "../../configs/envconst.config"



function President() {
  const [content, setContent] = useState("");

  useEffect(() => {
    initializeContent();
  }, []);

  const initializeContent = async () => {
    fetch(`${apiBaseUrl}/pdf/samplemarkdown.html`)
      .then((res) => res.text())
      .then((rescontent) => setContent(parse(rescontent)));
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header className="d-flex justify-content-end">
          <Button size="sm" font>Download</Button>
         
        </Card.Header>
        <Card.Body>{content}</Card.Body>
      </Card>
    </Container>
  );
}

export default President;
