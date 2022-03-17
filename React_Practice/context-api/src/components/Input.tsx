import { ChangeEvent, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Input = () => {
  const { state, actions } = useContext(UserContext);
  console.log(state, actions);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    actions.setUserId(value);
  };

  return (
    <div>
      <input type="text" value={state.userId} onChange={onChange} />;
      <div>{state.userId}</div>
    </div>
  );
};

export default Input;
