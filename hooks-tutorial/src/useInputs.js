import { useReducer } from "react";

function reducer(state, action) {
  // action 타입에 상관없이 기존에 있던 state값과 함께 새로 입력된 input의 값을 state에 반영한다.
  return {
    ...state,
    [action.name]: action.value
  };
}

function useInputs(initialForm) {
  // 부모 컴포넌트에서 받은 객체를 initialForm으로 받는다.
  // 상태(state), 이벤트호출러(dispatch)는 useReducer 훅을 통해 등록한다.
  const [state, dispatch] = useReducer(reducer, initialForm);

  // input에 변화가 일어날때마다 dispatch를 통해서 reducer함수를 호출한다.
  const onChange = e => dispatch(e.target);

  // state값과 onChange 메서드를 반환해준다.

  return [state, onChange];
}


export default useInputs;

