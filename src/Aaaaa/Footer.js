import styled from 'styled-components';
import { RiMapPinFill, RiPhoneFill } from 'react-icons/ri';
import { MdSend } from 'react-icons/md';
import { i12 } from '../resposive';
const Container = styled.div`
  display: flex;
  margin-top: 0%;
  background: #84694d;
  color: #3e250b;
  ${i12({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${i12({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Walfare</Logo>
        <Desc>
          As New York City's leading coffee services provider, <br />
          we're dedicated to providing diversified solutions that <br /> meet
          our clients' needs. Our national standing is rooted <br /> in our
          local presence, allowing us to serve you with all <br />
          the benefits of a large corporation while giving you the <br />{' '}
          personalized service of a smaller provider. Our heritage <br />
          is a unique combination of coffee roasting traditions and <br />
          revolutionary technologies, making us a complete coffee <br />{' '}
          solution that is unmatched by any other.
        </Desc>
      </Left>
      <Center>
        <Title>SERVICES</Title>
        <List>
          <ListItem>Delivery service</ListItem>
          <ListItem>Online ordering</ListItem>
          <ListItem> Routed service</ListItem>
          <ListItem>Delivery service</ListItem>

          <ListItem>50+ employees</ListItem>
          <ListItem>Sustainability</ListItem>

          <ListItem>Full service</ListItem>
          <ListItem>Safety</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RiMapPinFill style={{ marginRight: '10px' }} />
          New York City , 64c kibinon Street
        </ContactItem>
        <ContactItem>
          <RiPhoneFill style={{ marginRight: '10px' }} />
          +1 397 56 78
        </ContactItem>
        <ContactItem>
          <MdSend style={{ marginRight: '10px' }} />
          welfare@wlf.coffe
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
