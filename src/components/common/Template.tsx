import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import Footer from 'components/common/Footer';

type TemplateProps = {
  children: React.ReactNode,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282a36;
  height: 100%;
`;

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
