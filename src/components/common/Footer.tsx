import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
  a {
    font-size: 15px;
    color: #f8f8f2;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a>© SeungheonShin Powered By Gatsby.</a>
    </FooterWrapper>
  );
};

export default Footer;
