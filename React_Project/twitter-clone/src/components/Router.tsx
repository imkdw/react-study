import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

interface RouterProps {
  isLoggedIn: boolean;
  userObj: any;
  refreshUser: any;
}

// TODO: Router 컴포넌트 props 타입 지정하기
const Router = ({ isLoggedIn, userObj, refreshUser }: RouterProps) => {
  return (
    <>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route
              path="/profile"
              element={<Profile userObj={userObj} refreshUser={refreshUser} />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            {/* "/"외 다른 라우트는 모두 /으로 리다이렉트 시키기, 이는 useNavigate로도 처리가 가능하다. */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
