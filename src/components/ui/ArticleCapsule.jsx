import React, { useEffect, useState  } from "react";
import { Container, Card, Button } from "react-bootstrap";
import parse from "html-react-parser";
import { useFetch } from "use-http";
import FadeLoader from "react-spinners/FadeLoader";


const ArticleCapsule = (props) => {
  const [content, setContent] = useState("");
  const { get, loading, error } = useFetch('https://rrp-web-api.herokuapp.com/pdf/')
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  useEffect(() => {
    initializeContent();
  }, []);

  const initializeContent = async () => {
    const res = await get("samplemarkdown.html")
    setContent(parse(res))
  };

  return (
    <Container className="my-5">
      {error && 'Error'}
      {loading && <FadeLoader cssOverride={override} />}
      {!error && !loading ?<Card>
       <Card.Header className="d-flex justify-content-end">
          <Button size="sm" font>
            Download
          </Button>
        </Card.Header>
        <Card.Body>
     
       {content}</Card.Body>
      </Card>:''}
    </Container>
  );
};

export default ArticleCapsule;
