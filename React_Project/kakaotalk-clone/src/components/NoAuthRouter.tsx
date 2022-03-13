import { Routes, Route, Navigate } from "react-router-dom";
import Login from "route/Login";
import Register from "route/Register";
import ChatList from "route/ChatList";

interface NoAuthRouterProps {
  isLoggedIn: boolean;
  userObj: any;
}
const NoAuthRouter = ({ isLoggedIn, userObj }: NoAuthRouterProps) => {
  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/" element={<ChatList userObj={userObj} />} />
          <Route path="/chatlist" element={<ChatList userObj={userObj} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      )}

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default NoAuthRouter;
