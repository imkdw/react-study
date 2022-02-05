import { useState } from "react";

const IterationSample = () => {
  // names배열에 초기값을 배열로 줘서 안에는 객체형 데이터를 넣었다.
  // 이 때 id를 넣은 이유는 iteration 시 key값을 지정하기 위함이다.
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);

  const [inputText, setInputText] = useState('');

  // nextId 는 다음에 추가될 id의 숫자다. names의 길이에 + 1을 더해서 준다.
  const [nextId, setNextId] = useState(names.length + 1);

  // li요소를 더블클릭하면 삭제 이벤트를 호출한다.
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  // input이 변경될 떄 마다 inputText를 input의 value 값으로 변경한다.
  const onChange = e => setInputText(e.target.value);

  // 추가 버튼을 누르면 새로운 name을 추가한다.
  // 기존배열에 push 메서드를 사용하지 않고 concat메서드를 사용한 이유는 아래와 같다.
  // push는 기존 데이터를 변경하는 반면에 concat메서드는 새로운 배열을 생성한다.
  // 이 때 리액트의 불변성을 지키기 위해서다. 불변성은 성능에 영향을 준다.
  const onClick = () => {
    // 다음 이름을 지정한다. 기존 names에 concat 메서드를 사용해서 id(nextId), text(inputText)를 저장한다.
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });

    // 다음 id는 기존 nextId + 1로 5 > 6, 6 > 7 형식이다.
    setNextId(nextId + 1);

    // nextNames 변수를 setNames setter 함수를 통해서 names 배열에 저장한다.
    setNames(nextNames);

    // names추가가 완료되면 기존 input을 비우기 위해 setInputText에 ''을 넣어 호출한다.
    setInputText('');
  };

  // 리액트에서 key값을 지정해주지 콘솔에 에러로그가 찍히게 된다.
  // 리액트는 요소의 변경, 삭제를 감지할 때 key값을 기준으로 하는데 key를 주지 않으면 Virtual DOM이 업데이트 되면서
  // 모든 요소를 순회하면서 변경점을 찾아야 한다. 이러한 방식은 성능을 저하시킨다.
  // key값을 주게되면 빠르게 찾아서 다시 렌더링이 가능하다. key는 항상 고유한 값이여야 한다.
  // key가 중복될 경우 렌더링하면서 오류가 발생한다.
  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

  return (
    <ul>
      <input type="text" onChange={onChange} value={inputText} />
      <button onClick={onClick}>추가</button>
      {namesList}
    </ul>
  )
}

export default IterationSample;
