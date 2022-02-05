import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    /**
     * scrollHeight : 스크롤이 있는 박스 안의 div 높이 = 650px
     * clientHeight : 스크롤이 있는 박스의 높이 = 300px
     * scrollTop : 세로 스크롤바의 위치 = 350px
     */
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };

    return (
      // this.box에다가 해당 div의 ref를 지정한다.
      <div style={style} ref={ref => this.box = ref}>
        <div style={innerStyle}></div>
      </div>
    )
  }
}

export default ScrollBox;
