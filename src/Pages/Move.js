import React from 'react';
import Moves from './Moves';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { i12, tablete } from '../resposive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${i12({ height: '400vh' })}

  background: #3e250b;
`;
const Wrapper = styled.div`
  position: fixed;
  color: #654321;

  font-size: 36px;
  border: 3px solid #654321;
  ${tablete({ fontSize: '40px' })}
  ${i12({ fontSize: '30px' })}
`;

const Move = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Link to="/coffes">
        <Wrapper>Back</Wrapper>
      </Link>
      <Container>
        <div>
          {cartItems.map((item, index) => (
            <Moves item={item} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Move;
