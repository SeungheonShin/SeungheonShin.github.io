import React from 'react';
import styled from '@emotion/styled';

const TocWrapper = styled.div`
  position: fixed;

  box-sizing: content-box;
  top: 200px;
  left: 0;
  margin: 50px 30px;
  width: 200px;
  border-right: 1px solid #44475a;

  ul {
    display: inline-block;
    list-style: decimal;

    & ul {
      padding-left: 20px;

      & ul {
        padding-left: 40px;
      }
    }

    li {
      color: rgba(248, 248, 242, 0.7);
      padding: 4px 0;
      &:hover {
        color: #f8f8f2;
      }
    }
  }
`;

type TocProps = {
  content: string,
};

const TableOfContents: React.FC<TocProps> = ({ content }) => {
  return <TocWrapper dangerouslySetInnerHTML={{ __html: content }}></TocWrapper>;
};

export default TableOfContents;
