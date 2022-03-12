import React from "react";
import { Link } from "react-router-dom";

// TODO: Navigation 컴포넌트 props 타입 지정
const Navigation = ({ userObj }: any) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            {userObj.displayName ? userObj.displayName : userObj.email}의
            Profile
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navigation;
