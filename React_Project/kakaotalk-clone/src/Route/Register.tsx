import Container from "components/common/Container";
import styled from "styled-components";
import RegisterForm from "components/register/RegisterForm";
import { FontawesomeSmsIcon } from "Fontawesome";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`;
const Register = () => {
  const bgColor = "#ffeb34";
  return (
    <Container bgColor={bgColor}>
      <StyledHeader>
        <FontawesomeSmsIcon width="33px" height="33px" />
        {"\u00A0"}카카오톡
      </StyledHeader>
      <RegisterForm />
    </Container>
  );
};

export default Register;
