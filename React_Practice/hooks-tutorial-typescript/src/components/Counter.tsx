import { useReducer } from "react";

// 타입 선언
type Action = { type: "INCREASE" } | { type: "DECREASE" };

const reducer = (state: { value: number }, action: Action) => {
  switch (action.type) {
    // 액션의 타입에 따라 INCREASE, DECREASE 결정
    case "INCREASE":
      return { value: state.value + 1 };

    case "DECREASE":
      return { value: state.value - 1 };

    default:
      return state;
  }
};

const Counter = () => {
  // dispatch는 action을 발생시키는 함수이다.
  // dispatch(action)와 같은 형태로 액션을 발생시킬수 있다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
