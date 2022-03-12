import { Routes, Route } from "react-router-dom";
import Login from "Route/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Router;
