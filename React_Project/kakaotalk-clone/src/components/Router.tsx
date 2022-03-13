import { Routes, Route } from "react-router-dom";
import Login from "Route/Login";
import Register from "Route/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
