import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ArticleStack() {
  const [articleData, setArticleData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const loaderStyle = {
    display: "block",
    margin: "25vh auto",
    borderColor: "red",
  };

  useEffect(() => {
    initializeContent();
  }, []);

  const initializeContent = async () => {
    setIsLoading(true)
    fetch("https://rrp-web-api.herokuapp.com/article")
      .then((res) => res.json())
      .then((articles) => setArticleData(articles))
      .catch((error) => {
        console.log(error);
        return [];
      });
      setIsLoading(false)
  };
  const handleSearch = async () => {
    setIsLoading(true)
    if (searchText !== "") {
      fetch(`https://rrp-web-api.herokuapp.com/article?searchText=${searchText}`)
        .then((res) => res.json())
        .then((articles) => setArticleData(articles))
        .catch((error) => {
          console.log(error);
          return [];
        });
    }
    setIsLoading(false)
  };

  const copyUrl = async (e) => {
    console.log(e.target.value)
    return await navigator.clipboard.writeText(`${window.location.href}/${e.target.value}`);
  };
  return (
    <Card className="m-1 m-lg-5">
      <Card.Header className="px-1 px-lg-5">
        <Form className="d-flex mx-lg-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="mx-1"
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col lg={9} className=" m-auto">
            {isLoading && <FadeLoader cssOverride={loaderStyle} />}
              {(!isLoading && articleData)
                ? articleData.map((article) => (
                    <Card className="my-3" key={article.id}>
                      <Card.Body>
                        <Card.Title>
                          <Link to={`articles/${article.uri}`}>
                            {article.title}
                          </Link>
                        </Card.Title>
                        <Card.Text>{article.intro}</Card.Text>
                        <Button variant="secondary">PDF</Button>{" "}
                        <Button
                          variant="secondary"
                          onClick={(e) => {copyUrl(e)}}
                          value={article.uri}
                        >
                          Copy Link
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  ))
                : "Error in loading data"}
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </Card.Footer>
    </Card>
  );
}

export default ArticleStack;
