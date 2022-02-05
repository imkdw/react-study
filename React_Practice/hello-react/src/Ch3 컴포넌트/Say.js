import { useState } from "react";

const Say = () => {
  // useState 인자에 상태의 초깃값을 넣음.
  // 이 때 초기값은 객체, 배열, 문자열, 숫자 등 자유롭게 넣는다.
  const [message, setMessage] = useState('');

  // 상태를 바꾸어주는 함수 setter함수를 각 함수에 넣는다.
  const onClickEnter = () => setMessage('ㅎㅇ');
  const onClickLeave = () => setMessage('ㅂㅇ');

  // useSate는 한 컴포넌트에서 여러번 사용이 가능하다.
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
}

export default Say;