import LoginForm from "components/login/LoginForm";
import Links from "components/login/Links";
import { FontawesomeSmsIcon } from "Fontawesome";
import "styles/Login.scss";
import Container from "components/common/Container";
import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMsgWrapper = styled.div`
  width: 100%;
  height: 60px;
  text-align: right;
`;

const StyledMsg = styled.span`
  color: #a0a0a0;
  font-size: 12px;
  padding: 5px 5px 0 0;
`;

const Login = () => {
  const bgColor = "#ffeb34";
  return (
    <Container bgColor={bgColor}>
      <StyledMsgWrapper>
        <StyledMsg>Made by. 초보군붕이</StyledMsg>
      </StyledMsgWrapper>
      <StyledLogoWrapper>
        <FontawesomeSmsIcon width="100px" height="100px" />
      </StyledLogoWrapper>
      <LoginForm />
      <Links />
    </Container>
  );
};

export default Login;
