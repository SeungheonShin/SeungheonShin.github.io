import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const homeIcon = `https://cdn-icons-png.flaticon.com/512/25/25694.png`;
const githubIcon = `https://cdn-icons-png.flaticon.com/512/25/25231.png`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  position: absolute;
  right: 0;
  top: 0;
  padding: 12px;
`;

const NavBar: React.FC = () => {
  return (
    <NavBarWrapper>
      <Link to="/">
        <img src={homeIcon} alt={'Home'} width="40px" height="40px" />
      </Link>
      <Link to="https://github.com/SeungheonShin" target="_blank">
        <img src={githubIcon} alt={'Github'} width="40px" height="40px" />
      </Link>
    </NavBarWrapper>
  );
};

export default NavBar;
