import { connect } from "react-redux";
import { increastAsync, decreastAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increastAsync, decreastAsync }) => {
  return (
    <Counter number={number} onIncrease={increastAsync} onDecrease={decreastAsync} />
  );
};

export default connect(
  state => ({ number: state.counter }),
  { increastAsync, decreastAsync }
)(CounterContainer);
