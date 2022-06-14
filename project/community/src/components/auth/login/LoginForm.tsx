import { ChangeEvent } from "react";
import { useRecoilState, atom } from "recoil";
import styled from "styled-components";
import { v4 } from "uuid";

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
  const userIdState = atom<string>({
    key: v4(),
    default: "",
  });

  const passwordState = atom<string>({
    key: v4(),
    default: "",
  });

  const [userId, setUserId] = useRecoilState<string>(userIdState);
  const [password, setPassword] = useRecoilState<string>(passwordState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    if (name === "userId") {
      console.log(`value : ${value}, userId : ${userId}`);

      setUserId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <StyledWrapper>
      <StyledForm>
        <h1>로그인</h1>
        <StyledInput
          type="text"
          placeholder="아이디"
          name="userId"
          onChange={onChange}
        />
        <StyledInput
          type="text"
          placeholder="비밀번호"
          name="password"
          onChange={onChange}
        />
        <StyledButton type="submit">로그인</StyledButton>
        <div>
          {userId} {password}
        </div>
      </StyledForm>
    </StyledWrapper>
  );
};

export default LoginForm;
