import styled from "styled-components";
import Input from "components/Input";

const StyledFormWrapper = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginForm = styled.form`
  width: 244px;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFormInputWrapper = styled.div`
  width: 100%;
  height: 82px;
  border: 1px solid #e5d32e;
`;

const LoginForm = () => {
  interface IinputStyle {
    width: string
    height: string
    paddingLeft: string
  }
  const inputStyle: IinputStyle = {
    width: "100%",
    height: "40px",
    padding-left: "10px",
  }

  return (
    <StyledFormWrapper>
      <StyledLoginForm>
        <StyledFormInputWrapper>
          <Input
            type="text"
            placeholder="카카오계정 (이메일)"
            required
            width="100%"
            height="40px"
            fontSize="12px"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            required
            width="100%"
            height="40px"
            fontSize="12px"
          />
        </StyledFormInputWrapper>
        <button type="submit">로그인</button>
      </StyledLoginForm>
    </StyledFormWrapper>
  );
};

export default LoginForm;
