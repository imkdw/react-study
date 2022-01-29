import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const InputElem = useRef(null);

  /**
   * 기존 함수들은 컴포넌트가 리렌더링 될때마다 함수를 새로 만든다. 이런 방식에 문제는 없지만
   * 컴포넌트의 렌더링이 자주 발생하거나 렌더링 할 컴포넌트의 갯수가 많아지면 이 부분을 최적화 해주는게 좋다.
   * useCallback은 기존에 만들어 놨던 함수를 재사용 가능하게 해준다.
   * 첫번째 파라미터로는 실행시킬 함수를 넣고, 두번째 파라미터로는 배열을 넣는다.
   * 이 때 배열에 들어가는 값은 어떤 값이 변경됬을때 함수를 새로 생성할지에 대해 명시해야한다.
   */

  // 컴포넌트가 처음 렌더링 될때만 함수를 생성
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // number, list의 값이 바뀌면 함수를 생성
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // useRef를 통해 만든 변수에 current는 실제 DOM을 가르킨다.
    InputElem.current.focus();
  }, [number, list]);

  // 두번쨰 인자에 있는 값이 바뀌었을때만 연산하고 바뀌지 않았다면 이전에 연산했던 결과를 그대로 사용
  // 즉 렌더링을 최적화함
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={InputElem} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : {avg}</b>
      </div>
    </div>
  )
}

export default Average;
