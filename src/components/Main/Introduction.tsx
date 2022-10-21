import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  width: 100%;
  background: #383a59;
  color: #f8f8f2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 300px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`;

const Introduction: React.FC = () => {
  return (
    <Background>
      <Wrapper>
        <Title>SeungheonShin's Blog.</Title>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
