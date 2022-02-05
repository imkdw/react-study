/**
 * React에서 DOM을 제어할려면 state를 사용해서 할수도 있고 ref를 사용할수도 있다.
 * 대부분 기능은 state를 통해서 DOM을 업데이트할수 있지만 특정 기능 구현시 ref를 사용해야 한다.
 * 1. 특정 input에 focus를 주기
 * 2. 스크롤 박스를 조작하기
 * 3. Canvas요소에 그림 그리기
 */

import React, { Component } from "react";

class RefSample extends Component {
  // React v16.3부터 도입된 createRef라는 함수를 사용해서 ref를 만든다.
  input = React.createRef();

  handleFocus = () => {
    // ref를 설정해준 DOM에 접근하려면 ref.current에 접근하면 된다. focus()는 포커스를 주는 메서드다.
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        {/* props로 ref를 전달 */}
        <input ref={this.input} />
      </div>
    )
  }
}

export default RefSample;
