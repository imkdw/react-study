import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 :</h3>
      <ul>
        <li>
          {/* v5 버전에 있었던 activeStyle이 사라짐에 따라 isActive로 체크 해야함. */}
          <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'black', background: isActive ? 'black' : 'white' })} to="imkdw">imkdw</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'white' : 'black', background: isActive ? 'black' : 'white' })} to="velopert">velopert</NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          exact
          element={<div>사용자를 선택해주세요</div>}
        />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  )
}


export default Profiles;
