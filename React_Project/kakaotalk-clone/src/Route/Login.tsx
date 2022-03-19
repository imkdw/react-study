import LoginForm from "components/login/LoginForm";
import Links from "components/login/Links";
import Container from "components/common/Container";
import Message from "components/login/Message";
import Logo from "components/login/Logo";

const Login = () => {
  const bgColor = "#ffeb34";
  return (
    <Container bgColor={bgColor}>
      <Message />
      <Logo />
      <LoginForm />
      <Links />
    </Container>
  );
};

export default Login;
