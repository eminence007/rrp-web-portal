import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt();
const ArticleEditor = (props) => {
  const [articleText, setArticleText] = useState("");
  function handleEditorChange({ html, text }) {
    //console.log("handleEditorChange", html, text);
    setArticleText(text);
  }
  const handleSubmission = () => {
    let articlefile = new File([articleText], "article5.md", {
      type: "text/markdown"
    });
    const formData = new FormData();

    formData.append("profilePhoto", articlefile);

    fetch("https://rrp-web-api.herokuapp.com/user/photoUpload", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <button onClick={handleSubmission}>Submit</button>
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  );
};
export default ArticleEditor;
