import { useState } from "react";

const EventPractice = () => {
  // username, message를 따로 구분해서 setState도 가능하지만
  // 하나의 객체에 담아서 선언하는것이 보기 좋다.
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  // form 내부에 username, message를 디스트럭처링 할당을 통해 분해했다.
  const { username, message } = form;

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onClick = () => {
    alert(`${username} : ${message}`);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button
        onClick={onClick}
      >확인</button>
    </div>
  )
}

export default EventPractice;
