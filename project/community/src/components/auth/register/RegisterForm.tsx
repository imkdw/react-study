import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 600px;
  height: 500px;
  border: 1px solid;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
`;

const RegisterForm = () => {
  return (
    <StyledWrapper>
      <StyledForm>
        <h1>회원가입</h1>
        <StyledInput type="text" placeholder="아이디" />
        <StyledInput type="text" placeholder="비밀번호" />
        <StyledInput type="text" placeholder="비밀번호 확인" />
        <StyledInput type="text" placeholder="이름" />
        <StyledInput type="text" placeholder="이메일" />
        <StyledButton type="submit">회원가입</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default RegisterForm;