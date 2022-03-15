import styled from "styled-components";
import Input from "components/common/Input";
import { ChangeEvent, useState, createContext } from "react";

const StyledInputWrapper = styled.div`
  width: 370px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const InputUserId = () => {
  const [userId, setUserId] = useState("");
  const InputUserIdContext = createContext("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserId(value);
  };
  const inputStyle = {
    width: "100%",
    height: "40px",
    paddingLeft: "10px",
    fontWeight: "bold",
  };

  const subInputStyle = {
    borderBottom: "2px solid lightgray",
    focus: "2px solid black",
  };

  return (
    <StyledInputWrapper>
      <Input
        type="text"
        placeholder="카카오톡 아이디를 입력해주세요."
        required
        inputStyle={inputStyle}
        subInputStyle={subInputStyle}
        value={userId}
        onChange={onChange}
      />
    </StyledInputWrapper>
  );
};

export default InputUserId;
