import React, { useEffect, useState } from 'react';
import Coffe from './Coffe';
import data from '../data';
import styled from 'styled-components';
import Nav from '../Aaaaa/Nav';
import Footer from '../Aaaaa/Footer';
import { i12, tablete } from '../resposive';
import Ticktacks from '../Aaaaa/Ticktacks';

const Container = styled.div`
  display: flex;
  padding: 60px;
  ${tablete({ padding: '200px' })}

  flex-wrap: wrap;
  background: #3e250b;
  position: relative;
  scrollbar-color: yellow blue;
`;
const Menu = styled.h1`
  position: absolute;
  font-size: 37px;
  color: #84694d;
  letter-spacing: 10px;
  margin-left: 1%;
  ${i12({ fontSize: '20px', letterSpacing: '0px', marginLeft: '-25%' })}
`;

const Coffes = () => {
  const [laoded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, []);
  return (
    <>
      {laoded ? null : <Ticktacks />}

      <Nav />

      <Container>
        <Menu>What do you choose</Menu>
        {data.products.map((item) => (
          <Coffe item={item} key={item.id} />
        ))}
      </Container>
      <Footer />
    </>
  );
};
export default Coffes;
