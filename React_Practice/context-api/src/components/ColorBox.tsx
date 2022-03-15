import styled from "styled-components";
import { ColorConsumer } from "../context/ColorContext";

interface IStyledDiv {
  width: string;
  height: string;
  color: string;
}

const StyledDiv = styled.div<IStyledDiv>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
`;

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(state: any) => (
        <>
          <StyledDiv width="128px" height="128px" color={state.color} />
          <StyledDiv width="64px" height="64px" color={state.subColor} />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
