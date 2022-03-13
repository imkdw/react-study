import LoginForm from "components/Login/LoginForm";
import Links from "components/Login/Links";
import { FontawesomeSmsIcon } from "Fontawesome";
import "styles/Login.scss";
import Container from "components/Container";
import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const bgColor = "#ffeb34";
  return (
    <Container bgColor={bgColor}>
      <div className="creatorMessage">
        <span>Made by. 초보군붕이</span>
      </div>
      <StyledLogoWrapper>
        <FontawesomeSmsIcon width="100px" height="100px" />
      </StyledLogoWrapper>
      <LoginForm />
      <Links />
    </Container>
  );
};

export default Login;
