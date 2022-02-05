import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  /**
   * 에러가 발생했을때 실행되는 componentDidCatch(error, info) 메서드로 두개의 인자를 받는다.
   * error : 어디에서 에러가 발생했는지 알려준다.
   * info : 어디에있는 코드에서 에러가 발생했는지 알려준다.
   * 중요한 점은 자신 컴포넌트가 아닌 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.
   */

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div>에러 발생</div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
