import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };

  handleChange = e => {
    this.setState({
      // 객체 내부에서 [] 로 감싸면 그 값을 key가 된다.
      // e.target.name 은 input 태그 내부에 name값이 가져와진다.
      // 각 input은 username, message값을 가지고 이 값들은 state내부의 key값이다.
      // [e.target.name]: e.target.value 를 통해서 state를 업데이트 한다.
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange} />
        <input type="text" name="message" placeholder="메세지" value={this.state.message} onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;