import React, { useEffect,useState } from "react";
import { Markup } from 'interweave';
import { Container } from "react-bootstrap";
import MarkdownIt from "markdown-it";
const mdParser = new MarkdownIt();


function President() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("https://rrp-web-api.herokuapp.com/pdf/samplemarkdown")
      .then((response) => response.text())
      .then((text) => setContent(mdParser.render(text)));
  }, []);

  return <Container className="my-5">
    <Markup content={content}/>
  </Container>;
}

export default President;
