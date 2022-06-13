import LoginForm from "./components/auth/login/LoginForm";
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/auth/register/RegisterForm";
import Navigation from "./components/common/Navigation";
import GlobalStyle from "./components/common/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

export default App;
