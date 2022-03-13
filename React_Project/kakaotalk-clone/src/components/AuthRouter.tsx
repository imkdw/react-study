import Container from "components/common/Container";
import AuthRouterNav from "components/AuthRouterNav";
import { Routes, Route } from "react-router-dom";
import Friends from "route/Friends";
import ChatList from "route/ChatList";
import Notice from "route/Notice";

interface NoAuthRouterProps {
  userObj: any;
}

const NoAuthRouter = ({ userObj }: NoAuthRouterProps) => {
  return (
    <Container bgColor="#fff">
      <Routes>
        <Route path="/" element={<ChatList userObj={userObj} />} />
        <Route path="/friends" element={<Friends userObj={userObj} />} />
        <Route path="/chatlist" element={<ChatList userObj={userObj} />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <AuthRouterNav />
    </Container>
  );
};

export default NoAuthRouter;
