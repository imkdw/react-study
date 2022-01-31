import { createStore } from "redux";

// DOM Reference 정의
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// Action Type 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// Action 생성자 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 지정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      return state;
  }
}

// 스토어 생성(현재 프로젝트의 상태, 리듀서를 가지며 그 외에도 중요한 내장함수가 있다)
const store = createStore(reducer);

// render 함수 생성(상태가 업데이트 될때마다 구독에 의해 호출되고 html을 사용해서 UI속성을 변경)
const render = () => {
  const state = store.getState(); // store에서 현재 상태를 가져옴

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
};

render();
// render() 함수가 store.state가 변경될때마다 호출될수 있도록 store 내장함수인 구독을 사용
store.subscribe(render);

// dispatch 생성 ( action을 발생시키는 함수 )
divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()));
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)));
btnDecrease.addEventListener('click', () => store.dispatch(decrease()));