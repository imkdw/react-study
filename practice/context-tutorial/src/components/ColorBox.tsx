import ColorContext from "../contexts/color";
import { useContext } from "react";

type StateType = {
  color: string;
  subColor: string;
};

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      {(state: StateType) => (  
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subColor,
            }}
          />
        </>
      )}
    </>
  );
};

export default ColorBox;
