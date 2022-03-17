import Container from "components/common/Container";
import AuthRouterNav from "components/AuthRouterNav";
import { Routes, Route } from "react-router-dom";
import Friends from "route/Friends";
import ChatList from "route/ChatList";
import Notice from "route/Notice";
import AddFriend from "route/AddFriend";
import Login from "route/Login";

interface NoAuthRouterProps {
  isLoggedIn: boolean;
  userObj: any;
}

const NoAuthRouter = ({ isLoggedIn, userObj }: NoAuthRouterProps) => {
  return (
    <Container bgColor="#fff">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<ChatList userObj={userObj} />} />
            <Route path="/friends" element={<Friends userObj={userObj} />} />
            <Route path="/chatlist" element={<ChatList userObj={userObj} />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/addfriend" element={<AddFriend />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
      <AuthRouterNav />
    </Container>
  );
};

export default NoAuthRouter;
