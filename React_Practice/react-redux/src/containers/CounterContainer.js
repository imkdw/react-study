import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { useCallback } from "react";

// TODO: react-redux에서 제공하는 hooks를 통해서 컴포넌트 생성해보기
// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   )
// };


// FIXME: hooks를 사용하여 컴포넌트 생성
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  // useCallback hooks를 사용하여 컴포넌트 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  )
};

export default CounterContainer;