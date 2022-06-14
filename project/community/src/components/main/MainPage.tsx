import { Routes, Route } from "react-router-dom";
import LoginForm from "../auth/login/LoginForm";
import RegisterForm from "../auth/register/RegisterForm";

const MainPage = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
    </Routes>
  );
};

export default MainPage;
