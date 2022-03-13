import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="linkWrapper">
      <ul>
        <li>
          <Link to="/register" className="link">
            카카오 회원가입
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            비밀번호 재설정
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
