import React, { useEffect, useState  } from "react";
import { Container, Card, Button } from "react-bootstrap";
import parse from "html-react-parser";
import { useFetch } from "use-http";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import {apiBaseUrl} from "../../configs/envconst.config"


const Article = () => {
  const {articleuri} = useParams()
  const [content, setContent] = useState("");
  const { get, loading, error } = useFetch(apiBaseUrl+'/article/content')
  const loaderStyle = {
    display: "block",
    margin: "25vh auto",
    borderColor: "red",
  };
  useEffect(() => {
    initializeContent();
  }, []);

  const initializeContent = async () => {
    const res = await get(articleuri+".html")
    setContent(parse(res))
  };

  return (
      <>
      {error && 'Error'}
      {loading && <FadeLoader cssOverride={loaderStyle} />}
      {!error && !loading ? <Container className="my-5"> <Card>
       <Card.Header className="d-flex justify-content-end">
          <Button size="sm" font>
            Download
          </Button>
        </Card.Header>
        <Card.Body>
     
       {content}</Card.Body>
      </Card>
    </Container>:''}
    </>
  );
};

export default Article;
