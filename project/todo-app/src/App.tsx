import Container from "./components/todo/Container";
import GlobalStyle from "./components/common/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
};

export default App;
