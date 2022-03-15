import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/ColorContext";

const App: React.FC = () => {
  return (
    <ColorProvider>
      <ColorBox />
    </ColorProvider>
  );
};
export default App;
