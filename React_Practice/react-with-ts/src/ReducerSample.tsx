import { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color; // red, orange, yellow 중에서만 가능
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color };

function Reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };

    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };

    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };

    default:
      throw new Error("Unhandled actoin");
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(Reducer, {
    count: 0,
    text: "Hello",
    color: "red",
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
      </div>
    </div>
  );
}

export default ReducerSample;
