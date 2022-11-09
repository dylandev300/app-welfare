import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import N1 from '../Assets/N1.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../Aaaaa/Navbar';
import { createGlobalStyle } from 'styled-components';
import { i12, tablete } from '../resposive';

import Ticktack from '../Ticktack';

const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;
}

`;

const Container = styled.div`
  background: white;

  color: white;
`;
const Image = styled.img`
  z-index: 1;
  width: 100%;
  ${tablete({ height: '90vh' })}
`;
const InfoWlf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  margin-top: -40%;
  margin-left: 13%;
  ${tablete({ marginTop: '-70%', marginLeft: '0.30%' })}
  ${i12({ marginTop: '-110%', marginLeft: '0.30%' })}
`;
const Desc = styled.h1`
  font-size: 85px;
  font-weight: bold;

  text-align: center;
  letter-spacing: 6px;
  color: white;
  ${tablete({ fontSize: '75px' })}
  ${i12({ fontSize: '25px' })}
`;
const Button = styled.button`
  padding: 18px;
  border-radius: 23px;
  border: 3px solid white;
  background: transparent;
  color: white;
  font-size: 50px;
  cursor: pointer;
  ${i12({ fontSize: '25px', padding: '10px' })}

  margin-top: 4%;
`;

const Home = () => {
  const [laoded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, []);
  return (
    <>
      {laoded ? null : <Ticktack />}
      <GlobalStyle />
      <Navbar />
      <Container>
        p
        <Image src={N1} />
        <InfoWlf>
          <Desc>Welcome On Welfare Webstore</Desc>
          <Link to="/coffes">
            <Button>let's go</Button>
          </Link>
        </InfoWlf>
      </Container>
    </>
  );
};

export default Home;
