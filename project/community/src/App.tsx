import Navigation from "./components/common/Navigation";
import GlobalStyle from "./components/common/GlobalStyle";
import { RecoilRoot } from "recoil";
import MainPage from "./components/main/MainPage";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Navigation />
      <MainPage />
    </RecoilRoot>
  );
};

export default App;
