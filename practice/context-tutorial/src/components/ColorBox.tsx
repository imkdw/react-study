import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    // * ColorContext 내부에 있는 Consumer 컴포넌트로 Context의 상태를 가져온다.
    <ColorConsumer>
      {/* value에는 ColorContext에서 지정한 기본 상태가 넘어오게된다. */}
      {({ state }) => (
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
    </ColorConsumer>
  );
};

export default ColorBox;
