import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About = () => {
  // useLocation() Hook을 사용하면 URL 쿼리스트링을 가져올 수 있다.
  // useLocation().search의 데이터가 URL에서 전달된 쿼리스트링 들이다. ex) localhost:3000/about?detail=true 에서 ?detail=true 부분
  const query = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true // 해당 설정이 쿼리문 맨 앞에 ? 표시를 생략해준다.
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프젝은 라우터 기초를 실습함</p>
      {showDetail && <p>detail값을 true로 설정했네요</p>}
    </div>
  );
};

export default About;
