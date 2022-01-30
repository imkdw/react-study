import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* /profiles로 시작되는 모든 라우팅을 매칭한다는 뜻이다. "/profiles/*" */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        {/* 정의된 path외에 다른 path가 들어올경우 404 not found를 보여준다. */}
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </div>
  );
};

export default App;