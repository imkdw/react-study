import React, { Component } from 'react';

/**
 * 라이프 사이클 Mount 이벤트는 아래와 같은 순서로 작동한다. 즉 초기 렌더링시에 아래 순서대로 메서드들이 작동한다.
 * 1. Component 생성 이후 constuctor 실행
 * 2. getDerivedStateFromProps (props에 있는 값을 state에 넣는 동작)
 * 3. render ( 브라우저에 컴포넌트를 보여주는 과정 )
 * 4. componentDidMount ( 컴포넌트가 실제로 웹에 나타난 후 실행 )
 * 
 * 정리 : constructor -> getDerivedStateFromProps -> render -> componentDidMount
 */

/**
 * 라이프사이클 업데이트 이벤트는 아래와 같은 순서로 작동한다. 랜덤색상 버튼을 누르면 아래 순서대로 진행된다.
 * 1. 버튼 클릭시 부모 컴포넌트의 state.color 색이 랜덤으로 변경된다.
 * 2. LifeCycleSample 컴포넌트에 전달되는 props는 부모의 state.color 이므로 props에 있는 값을 state에 넣기위해 getDerivedStateFromProps 메서드가 실행된다.
 * 3. state가 업데이트 됨에 따라 shouldComponentUpdate 메서드가 실행된다. 이 때 state.number의 값이 4로 끝나면 false를 리턴해서 렌더링 과정을 건너뛴다.
 * 4. 3번 단계에서 true를 리턴하게 되면 렌더링이 이루어지는데 바로 직전에 getSnapShotBeforeUpdate 메서드가 실행된다. 이전 props와 업데이트 될 state가 동일하다면 true를 리턴한다. getSnapShotBeforeUpdate의 리턴값은 componentDidUpdate의 인자 snapshot으로 받을 수 있다.
 * 5. 컴포넌트가 업데이트 된 이후에 componentDidMount 메서드가 실행된다.
 * 
 * 정리 : getDerivedStateFromProps -> shouldComponentUpdate -> getSnapShotBeforeUpdate -> componentDidUpdate
 */


class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };
    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;