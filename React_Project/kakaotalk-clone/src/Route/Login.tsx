import "styles/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="creatorMessage">
        <span>Made by. 초보군붕이</span>
      </div>
      <div className="logoWrapper">
        <FontAwesomeIcon icon={faCommentSms} className="logoIcon" />
      </div>
      <div className="formWrapper">
        <form className="loginForm">
          <div className="formInputWrapper">
            <input type="text" placeholder="카카오계정 (이메일)" required />
            <input type="password" placeholder="비밀번호" required />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
      <div className="linkWrapper">
        <ul>
          <li>
            <Link to="/" className="link">
              카카오계정 찾기
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              비밀번호 재설정
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
