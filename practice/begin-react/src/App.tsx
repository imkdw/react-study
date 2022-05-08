import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const onClick = () => setNumber(number + 1);
  return (
    <>
      <div>{number}</div>
      <button onClick={onClick}>+1</button>
    </>
  );
};

export default App;
