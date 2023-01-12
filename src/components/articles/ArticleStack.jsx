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
import {apiBaseUrl,articlesPerPage} from "../../configs/envconst.config"

let firstLoad = true;
function ArticleStack() {
  const [articleData, setArticleData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tagList, setTagList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const loaderStyle = {
    display: "block",
    margin: "25vh auto",
    borderColor: "red",
  };
  
  useEffect(() => {
    initializeContent();
  }, []);

  const findArticles = async (searchWords='',pageNumber=1) => {
    try {
      let url =`${apiBaseUrl}/article?searchText=${searchWords}&pageNumber=${pageNumber}&articlesPerPage=${articlesPerPage}`
      const res = await fetch(url);
      const articlePage = await res.json();
      const articles =  articlePage.articles;
      setTotalPageCount(articlePage.totalPageCount) 
      setArticleData(articles);
    } catch (error) {
      setArticleData([]);
    }
  }
  const initializeContent = async () => {
    setIsLoading(true);
    await findArticles();
    const res =await fetch(`${apiBaseUrl}/article/tagList`)
    const tagListRes = await res.json();
    setTagList(tagListRes.tagList)
    firstLoad=false;
    setIsLoading(false);
  };
   

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentPage(1)
    await findArticles(searchText)
    setIsLoading(false);
  };
   const handlePrevPage =async () => {
    setIsLoading(true);
    await findArticles(searchText,currentPage-1)
    setCurrentPage(prevCurrentPage => prevCurrentPage-1 )
    setIsLoading(false);
   }
   const handleNextPage =async () => {
    setIsLoading(true);
    await findArticles(searchText,currentPage+1)
    setCurrentPage(prevCurrentPage => prevCurrentPage+1 )
    setIsLoading(false);
   }

  const copyUrl = async (e) => {
    console.log(e.target.value);
    return await navigator.clipboard.writeText(
      `${window.location.href}/${e.target.value}`
    );
  };
  return (
    <Card className="m-1 m-lg-5">
      <Card.Header className="px-1 px-lg-5">
        <Form className="d-flex mx-lg-5" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="खोजें"
            className="mx-1"
            aria-label="खोजें"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            list="list-tag"
            disabled={isLoading}
          />
          <datalist id="list-tag">
            {tagList && tagList.map((tag) => <option key={tag}>{tag}</option>)}
          </datalist>
          <Button
            variant="outline-success"
            className="mx-1"
            disabled={isLoading}
            type='submit'
          >
            खोजें
          </Button>
        </Form>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col lg={9} className=" m-auto">
              {isLoading && <FadeLoader cssOverride={loaderStyle} />}
              {!isLoading && articleData
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
                          onClick={(e) => {
                            copyUrl(e);
                          }}
                          value={article.uri}
                        >
                          Copy Link
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  ))
                : ""}
            </Col>
          </Row>
        </Container>
      </Card.Body>
      {!isLoading && articleData.length>0 && <Card.Footer className="d-flex justify-content-end" >
       <Pagination >
          <Pagination.Prev disabled={currentPage===1} onClick={handlePrevPage}/>
          <Pagination.Item>{`${currentPage } of ${totalPageCount}`}</Pagination.Item>
          <Pagination.Next disabled={currentPage===totalPageCount} onClick={handleNextPage}/>
        </Pagination>
      </Card.Footer>}
    </Card>
  );
}

export default ArticleStack;
