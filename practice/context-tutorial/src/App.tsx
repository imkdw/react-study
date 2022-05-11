import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

const App: React.FC = () => {
  return (
    // * ColorContext 내부에 Provider를 사용하면 value를 변경할 수 있다.
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
