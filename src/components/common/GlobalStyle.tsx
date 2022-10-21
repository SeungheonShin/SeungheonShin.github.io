import React from 'react';
import { Global, css } from '@emotion/react';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    background: #282a36;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle: React.FC = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
