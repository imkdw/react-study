import styled from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { firebaseAuth, firebaseDB } from "firebase/firebaseInstance";
import { ChangeEvent, FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const StyledForm = styled.form`
  width: 244px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const RegisterForm = () => {
  const navigate = useNavigate();

  const inputStyle = {
    width: "100%",
    height: "40px",
    fontSize: "12px",
    color: "#000",
    paddingLeft: "10px",
  };

  const subInputStyle = {
    border: "1px solid #f2f2f2",
  };

  const buttonStyle = {
    width: "100%",
    height: "40px",
    border: "1px solid #e5d32e",
    fontSize: "12px",
    backgroundColor: "#f6f6f6",
    borderRadius: "5px",
  };

  const [account, setAccount] = useState({
    email: "",
    password: "",
    rePassword: "",
    nickname: "",
    kakaoID: "",
  });

  const [error, setError] = useState("");

  const { email, password, rePassword, nickname, kakaoID } = account;

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== rePassword) {
      setError("비밀번호가 서로 같지 않습니다.");
    }

    try {
      const credential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = credential;
      await setDoc(doc(firebaseDB, "users", user.uid), {
        email: user.email,
        nickname: nickname,
        uid: user.uid,
        kakaoID: kakaoID,
        profile:
          "https://firebasestorage.googleapis.com/v0/b/kakaotalk-clone-beed5.appspot.com/o/default_profile.svg?alt=media&token=c8d1c684-8f7b-4174-a334-24b9a2568a89",
        message: "",
      });
      navigate("/chatlist");
    } catch (error: any) {
      setError(error.code);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
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
        subInputStyle={subInputStyle}
        onChange={onChange}
        value={password}
      />
      <Input
        type="password"
        name="rePassword"
        placeholder="비밀번호 재확인"
        required
        inputStyle={inputStyle}
        subInputStyle={subInputStyle}
        onChange={onChange}
        value={rePassword}
      />
      <Input
        type="text"
        name="nickname"
        placeholder="이름 (최대 10자)"
        required
        inputStyle={inputStyle}
        subInputStyle={subInputStyle}
        onChange={onChange}
        value={nickname}
      />
      <Input
        type="text"
        name="kakaoID"
        placeholder="카카오 아이디"
        required
        inputStyle={inputStyle}
        subInputStyle={subInputStyle}
        onChange={onChange}
        value={kakaoID}
      />
      <Button buttonStyle={buttonStyle}>회원가입</Button>
      <span style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
        {error}
      </span>
    </StyledForm>
  );
};

export default RegisterForm;
