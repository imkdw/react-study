import { useParams } from 'react-router-dom';
import WithRouter from './withRouter';

const data = {
  imkdw: {
    name: '김동우',
    desc: '개발자를 꿈꾸는 군인'
  },
  velopert: {
    name: '김민준',
    desc: '리액트를 좋아하는 개발자'
  }
};

const Profile = () => {
  // useParams() Hook을 사용하게 되면 URL 파라미터를 가져올 수 있다.
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return (
      <div>존재하지 않는 유저입니다.</div>
    )
  }

  return (
    <div>
      <h3>
        {username} {(profile.name)}
      </h3>
      <p>{profile.desc}</p>
      <WithRouter />
    </div>
  )
}

export default Profile;