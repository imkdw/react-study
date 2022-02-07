import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => { },
    setSubColor: () => { }
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor }
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}

// const ColorConsumer = ColorContext.Consumer와 동일한 뜻
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;