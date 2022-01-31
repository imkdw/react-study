import Counter from "../components/Counter";
import { connect } from 'react-redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} increase={increase} decrease={decrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  }
});

/**
 * Container Component와 Redux와 연동하려면 connect 함수를 사용해야한다.
 * 코드 >> connect(mapStateToProps, mapDispatchToProps)(연동할컴포넌트)
 * 1. mapStateToProps : Redux Store 내부의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
 * 2. mapDispatchToProps : 액션생성함수를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
 * 
 */
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

