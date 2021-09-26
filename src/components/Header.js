import React from 'react';
import logo from '../img/logo.svg';
import styled from "styled-components";

const HeaderWrap = styled.div`
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #040404;
    font-family: 'Noto Sans KR';
    letter-spacing: -1px;
    font-size: 0;
`;

const Img = styled.img`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  height: 300px;
`;

function Header() {
  return (
    <HeaderWrap> 
      <Img src={logo} alt="logo" />
      What's the Weather?
    </HeaderWrap> 
  );
}

export default Header;