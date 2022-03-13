import styled from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "firebaseInstance";
import { useNavigate } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = account;

  const inputStyle = {
    width: "100%",
    height: "100px",
    fontSize: "12px",
    color: "#000",
    paddingLeft: "10px",
  };

  const subInputStyle = {
    borderBottom: "1px solid #f2f2f2",
  };

  const buttonStyle = {
    width: "100%",
    height: "40px",
    border: "1px solid #e5d32e",
    fontSize: "12px",
    backgroundColor: "#f6f6f6",
    borderRadius: "5px",
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/chatlist");
    } catch (error: any) {
      setError(error.code);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledLoginForm onSubmit={onSubmit}>
        <StyledFormInputWrapper>
          <Input
            type="text"
            name="email"
            placeholder="카카오계정 (이메일)"
            required
            inputStyle={inputStyle}
            subInputStyle={subInputStyle}
            onChange={onChange}
            value={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            inputStyle={inputStyle}
            onChange={onChange}
            value={password}
          />
        </StyledFormInputWrapper>
        <Button value="로그인" buttonStyle={buttonStyle} />
      </StyledLoginForm>
      <span style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
        {error}
      </span>
    </StyledFormWrapper>
  );
};

export default LoginForm;
