/**
 * 액션 타입 정의하기
 */
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // input 값 변경
const INSERT = 'todos/INSERT'; // todo 신규등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/체크해제
const REMOVE = 'todos/REMOVE'; // todo 삭제

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3; // insert가 호출될때 1씩 증가함

export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: 'react와 redux 사용하기',
      done: false
    }
  ]
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }

    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      }

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
      }

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state
  }
}

export default todos;
