import { ChangeEvent, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

const Input = () => {
  const { state, actions } = useContext(UserContext);
  console.log(state, actions);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    actions.setUserId(value);
  };

  return (
    <StyledDiv>
      <input type="text" value={state.userId} onChange={onChange} />;
      <div>{state.userId}</div>
    </StyledDiv>
  );
};

export default Input;
