import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function Reducer(state: number, actoin: Action): number {
  switch (actoin.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      return state - 1;

    default:
      throw new Error("Unhandle Action");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(Reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
