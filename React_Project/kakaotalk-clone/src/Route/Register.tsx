import Container from "components/common/Container";
import RegisterForm from "components/register/RegisterForm";
import Header from "components/register/Header";

const Register = () => {
  const bgColor = "#ffeb34";
  return (
    <Container bgColor={bgColor}>
      <Header />
      <RegisterForm />
    </Container>
  );
};

export default Register;
