import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import login from "../../../api/login";

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

const LoginForm = () => {
  const [account, setAccount] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = account;

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(userId, password);
    console.log(response);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={onSubmit}>
        <h1>로그인</h1>
        <StyledInput
          type="text"
          placeholder="아이디"
          name="userId"
          onChange={inputChange}
        />
        <StyledInput
          type="text"
          placeholder="비밀번호"
          name="password"
          onChange={inputChange}
        />
        <StyledButton type="submit">로그인</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default LoginForm;
