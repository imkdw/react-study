import React, { createContext, useState } from "react";

// * Context State의 타입 정의
type ColorContextState = {
  state: {
    color: string;
    subColor: string;
  };
  actions: {
    setColor: (color: string) => void;
    setSubColor: (subColor: string) => void;
  };
};

// * Context 생성
export const ColorContext = createContext<ColorContextState>({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// * Provider 생성
const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
