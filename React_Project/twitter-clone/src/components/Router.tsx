import { Routes, Route, RouteProps } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

interface RouterProps {
  isLoggedIn: boolean;
}

const Router = ({ isLoggedIn }: RouterProps) => {
  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </>
  );
};

export default Router;
