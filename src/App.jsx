import { styled } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Form from "./components/Form";

const StyleBody = styled.div`
  padding-block: 1.3rem;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(./background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 2.9rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyleBody>
        <Form />
      </StyleBody>
    </>
  );
}

export default App;
