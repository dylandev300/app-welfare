import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { i12, tablete } from '../resposive';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0%;
  width: 136%;
  height: 90%;
  ${tablete({ width: '206%' })}
  background-color: rgba(260, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
  cursor: pointer;
  margin-left: -15%;
  ${i12({ height: '50%', marginLeft: '-40%', marginTop: '40%', width: '116%' })}
`;
const Container = styled.div`
  flex: 0.4;
  margin: 84px;

  position: relative;
  min-width: 280px;
  height: 350px;
  &:hover ${Info} {
    opacity: 1;
  }
  ${i12({ margin: '-42px' })}
`;

const Image = styled.img`
  height: 89%;

  border-radius: 14px;
  background: #84694d;
  margin-left: -15%;
  ${i12({ height: '50%', marginLeft: '-40%', marginTop: '40%' })}
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
  border-radius: 14px;
  width: 200px;
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;

  background-color: transparent;
  color: #3e250b;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border: 2px solid #3e250b;

  &:before {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;

    position: absolute;
    background-color: #84694d;
    left: 0;
    top: 70px;
    transition: all 0.5s ease-in-out;
    z-index: -2;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
    position: absolute;
    background-color: #84694d;
    left: 0;
    top: -300px;
    transition: all 0.5s ease-in-out;
    z-index: -3;
  }
  &:hover&:after,
  &:hover&:before {
    top: 0;
  }
  &:hover {
    color: #3e250b;
    transform: scale(1.2, 1.2);
  }
  ${i12({ width: '125px', fontSize: '18px' })}
`;
const Option = styled.p`
  letter-spacing: 7px;
  margin-bottom: 3%;

  color: #3e250b;
  font-size: 24px;
  ${tablete({ fontSize: '22px' })}
  font-weight: bold;
  ${i12({ fontSize: '18px', letterSpacing: '0px' })}
`;
const Price = styled.h2`
  color: #3e250b;
`;

const Coffe = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  return (
    <>
      <Container>
        <Image src={item.imgUrl} />
        <Info>
          <Option>{item.desc}</Option>

          <Button onClick={addToCart}>Add To Bag</Button>
          <Price> ${item.price} </Price>
        </Info>
      </Container>
    </>
  );
};

export default Coffe;
