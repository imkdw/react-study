import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

/**
 * * 1. recoil로 상태관리를 위해서는 RecoilRoot가 필요
 * * 2. RecoilRoot는 루트 컴포넌트에 넣는것이 가장좋음
 */

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div>gd</div>
    </RecoilRoot>
  );
};

export default App;
