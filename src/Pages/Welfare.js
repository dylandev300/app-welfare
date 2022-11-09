import React from 'react';
import grain from '../Assets/grain.mp4';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { i12, tablete } from '../resposive';
const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;
  ${tablete({ background: 'black' })}
  ${i12({ background: 'black' })}
}

`;
const Wrapper = styled.div`
  position: fixed;
  color: white;
  margin-top: 0.1%;

  font-size: 36px;
  border: 3px solid white;
  cursor: pointer;
  z-index: 14;
`;
const Video = styled.video`
  width: 100%;
  object-fit: contain;

  z-index: 15;
  ${tablete({ marginTop: '40%' })}
  ${i12({ marginTop: '70%' })}
`;
const Welfare = () => {
  return (
    <div>
      <GlobalStyle />
      <Link to="/home">
        <Wrapper>Back</Wrapper>
      </Link>
      <Video src={grain} autoPlay loop muted />
    </div>
  );
};

export default Welfare;
