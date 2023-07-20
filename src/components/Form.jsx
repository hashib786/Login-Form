import { styled } from "styled-components";

const StyledForm = styled.form`
  min-width: 285px;
  width: min(450px, 90%);
  padding: 2.2rem;
  background-color: #66616167;
  backdrop-filter: blur(4px);
  border-radius: 0.8rem;
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 1.2rem;
  background-color: #a295956b;
  outline: none;
  padding: 0.7rem 1.3rem;
  border: none;
  font-size: 1.2rem;

  &::placeholder {
    color: #d6d1d1;
  }
`;

const Button = styled.button`
  width: 70%;
  border-radius: 1.2rem;
  text-align: center;
  background: linear-gradient(to left, #090df0, #1704c4);
  padding: 0.7rem 1.3rem;
  border: none;
  box-shadow: 2px 1px 6px 1px #091bdb;
  cursor: pointer;
`;

const Line = styled.hr`
  width: 100%;
  background-color: #0414f8;
  border: none;
  height: 3px;
`;

const Para = styled.p`
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  &:last-child {
    margin-bottom: 2.4rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
`;

const Icon = styled.p`
  font-size: 1.3rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #6a73fc;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
const Form = () => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Heading>Welcome</Heading>
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="PassWord" />
      <Button>Sign In</Button>
      <Para>Or Login With</Para>
      <Line></Line>
      <Icons>
        <Icon>❤️</Icon>
        <Icon>🔥</Icon>
        <Icon>😊</Icon>
      </Icons>
      <Para>Forgot Password</Para>
    </StyledForm>
  );
};

export default Form;
