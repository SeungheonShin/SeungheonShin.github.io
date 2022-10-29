import React from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  font-family: 'Times New Roman';
  // Renderer Style
  flex: 1;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
  color: #f8f8f2;
  // Apply Padding Attribute to All Elements
  p {
    padding: 5px 0;
    code {
      background: #383a59;
      border: 1px solid #ff79c6;
      border-radius: 5px;
      padding: 0 2px;
    }
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 15px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 30px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #f8f8f2;
    font-weight: 800;
    background: #44475a;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #8be9fd;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-carbon-background: #2f3147;
    --deckgo-highlight-code-token-comment: #f1fa8c;
    --deckgo-highlight-code-token-punctuation: rgba(248, 248, 242, 0.7);
  }
`;

const PostContent: React.FC<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
