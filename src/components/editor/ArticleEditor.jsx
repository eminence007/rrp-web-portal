
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}
 const ArticleEditor=(props) => {
  return (
    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
  );
};
export default ArticleEditor