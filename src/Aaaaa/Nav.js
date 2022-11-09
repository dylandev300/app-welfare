import styled from 'styled-components';
import Logos from '../Assets/Logos.png';
import { useSelector } from 'react-redux';
import { BsBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { i12, tablete } from '../resposive';
const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 14vh;
  background: #3e250b;
`;
const Image = styled.img`
  width: 10%;

  background: transparent;
  margin-top: 2%;
  cursor: pointer;
  ${tablete({ width: '17%' })}
  ${i12({ width: '40%', marginLeft: '-6%', marginTop: '2.6%' })}
`;
const Menu = styled.ul``;
const MenuItem = styled.li`
  font-size: 100px;
  cursor: pointer;
`;
const Number = styled.span`
  font-size: 50px;
  color: #3e250b;
  position: absolute;
  margin-top: -5.4%;

  margin-left: 0.2%;
  text-align: center;
  ${tablete({ marginTop: '-10%' })}
  ${i12({ marginTop: '-26%' })}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Nav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <Link to="/home">
        <Containaire>
          <Image src={Logos} />

          <Menu>
            <MenuItem>
              <Link to="/cartitem">
                <BsBagFill color="  #84694d" />
              </Link>
              <Link to="/cartitem">
                <Wrapper>
                  <Number>{totalQuantity}</Number>
                </Wrapper>
              </Link>
            </MenuItem>
          </Menu>
        </Containaire>
      </Link>
    </>
  );
};

export default Nav;
