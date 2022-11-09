import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png';
import { i12, tablete } from '../resposive';
const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 14vh;
  background: black;
`;
const Image = styled.img`
  width: 10%;

  margin-top: 2%;
  ${tablete({ width: '17%' })}
  ${i12({ width: '40%', marginLeft: '-6%', marginTop: '2.6%' })}
`;
const Menu = styled.ul``;
const MenuItem = styled.li`
  font-size: 55px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 20px;
  color: white;
`;

const Navbar = () => {
  return (
    <Containaire>
      <Image src={Logo} />
      <NavLink
        style={({ isActive }) => {
          return { color: 'black' };
        }}
        to="/welfare"
      >
        <Menu>
          <MenuItem>WLF</MenuItem>
        </Menu>
      </NavLink>
    </Containaire>
  );
};

export default Navbar;
