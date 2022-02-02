import React, { useState } from "react";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

const App = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div>
      <button onClick={onClick} onMouseOver={onMouseOver}>눌러바</button>
      {visible && <SplitMe />}
    </div>
  );
}

export default App;
