import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { register } from "../../../api/AuthAPI";

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
  const [account, setAccount] = useState({
    userId: "",
    password: "",
    rePassword: "",
    nickname: "",
    email: "",
  });

  const { userId, password, rePassword, nickname, email } = account;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await register({
      userId,
      password,
      rePassword,
      nickname,
      email,
    });
    console.log(response);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <StyledInput
          type="text"
          placeholder="아이디"
          name="userId"
          value={userId}
          onChange={onChange}
        />
        <StyledInput
          type="text"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
        />
        <StyledInput
          type="text"
          placeholder="비밀번호 확인"
          name="rePassword"
          value={rePassword}
          onChange={onChange}
        />
        <StyledInput
          type="text"
          placeholder="이름"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
        <StyledInput
          type="text"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={onChange}
        />
        <StyledButton type="submit">회원가입</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default RegisterForm;
