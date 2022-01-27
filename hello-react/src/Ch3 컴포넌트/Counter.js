import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    // state는 this.state형식으로 접근이 가능하다.
    const { number, fixedNumber } = this.state;
    return (
      <div>
        {/* state내부에 있는 number를 렌더링 */}
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>

        {/* button 태그에 onClick 즉 클릭시 발생하는 이벤트를 정의한다. */}
        <button onClick={() => {
          // this.setState를 활용하여 state를 변경할 수 있다.
          // 버튼을 누를때 마다 state내부에 number값에 1을 더한다.
          this.setState({ number: number + 1 }, () => {
            console.log('call setState');
            console.log(this.state);
          });
        }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
