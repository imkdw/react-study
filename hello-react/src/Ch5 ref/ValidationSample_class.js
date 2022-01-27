import React, { Component } from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  };

  // input ref 생성
  input = React.createRef();

  // input값이 변경될 때 마다 state내부의 password 값이 변경된다.
  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  // 버튼 클릭시 state.clicked를 true로 변경하고 만약 입력값이 0000일 경우 validated를 true로, 0000이 아닐경우 false로 바꾼다
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });

    // input ref에 대해서 focus 주기
    this.input.focus();
  };



  render() {
    return (
      <div>
        <input type="password" value={this.state.password} onChange={this.handleChange}
          // 1. state.clicked가 true일 경우 2번 로직으로 넘어가고 false일 경우 그냥 빈값으로 둔다. 초기 렌더링시에는 클래스값이 없는것과 마찬가지다.
          // 2. 만약 true일 경우 state.validated를 검사한다. true일 경우 암호가 0000인 경우이므로 class를 success로, false일 경우 0000가 아니니 failure로 변경한다.
          // 3. 이 때 ValidationSample.css 에 정의된 내용되로 input의 background-color가 변경된다.
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          ref={ref => this.input = ref}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}

export default ValidationSample;
