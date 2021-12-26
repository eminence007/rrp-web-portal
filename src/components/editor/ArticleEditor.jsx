import React, { useState, useCallback, useEffect } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt();
let firstLoad = true;
const ArticleEditor = (props) => {
  const [articleText, setArticleText] = useState("");
  function handleEditorChange({ html, text }) {
    //console.log("handleEditorChange", html, text);
    setArticleText(text);
  }
  const handleSubmission = useCallback(async () => {
    console.log("The text is :" + articleText);
    var articlefile = new File([articleText], "article1.md", {
      type: "text/markdown"
    });
    const formData = new FormData();
    formData.append("profilePhoto", articlefile);
    const response = await fetch(
      "https://rrp-web-api.herokuapp.com/user/photoUpload",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    if (response.status >= 200 && response.status <= 299) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      // Handle errors
      console.log(response.status, response.statusText);
    }
  }, [articleText]);

  // useEffect(() => {
  //   if (firstLoad) {
  //     firstLoad = false;
  //     return;
  //   }
  //   handleSubmission();
  // }, [handleSubmission]);

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
