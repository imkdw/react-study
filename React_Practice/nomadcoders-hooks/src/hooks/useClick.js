import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
