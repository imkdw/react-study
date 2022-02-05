import { useReducer } from "react"

/**
 * useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을때 사용하는 Hook 이다.
 * 파라미터로는 상태와 업데이트를 위해 필요한 정보를 담은 액션을 받아서 새로운 상태를 반환하는 함수다.
 * reducer를 사용할때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 외부로 분리시킬수 있다는 점이다.
 */
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  /**
   * state : 현재 가리키고 있는 상태
   * dispatch : 액션을 발생시키는 함수. dispatch(action)과 같은 형태로 함수안에 파라미터로 액션을 넣어주면 reducer함수가 발생되는 구조다.
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 카운터 값 : <b>{state.value}</b> 입니다.</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  )
}

export default Counter;
