import { useParams, useLocation, useNavigate } from 'react-router-dom';

const WithRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly />

      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} rows={7} readOnly />

      <button onClick={() => navigate('/')}>홈으로</button>
    </>
  );
};

export default WithRouter;