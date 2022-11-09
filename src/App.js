import styled from 'styled-components';
import Layout from './Aaaaa/Layout/Layout';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body{

  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background:#84694d ;
  }
  ::-webkit-scrollbar-track{
    background:#3e250b;
  }

}

`;
const Container = styled.div`
  overflow-x: hidden;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Layout />
      </Container>
    </>
  );
};
export default App;
