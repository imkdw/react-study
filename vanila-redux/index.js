import { createStore } from 'redux';

// 별도의 라이브러리 없이 바닐라JS로 작업하기 위해 DOM을 직접 수정해줘야함
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션(프로젝트의 상태에 변화를 일으킴) 타입들
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수. 반드시 type값을 가져야 하며 그 외 추후 상태를 업데이트할때 참고하고 싶은 값은 임의입력가능
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = () => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  // 리듀서는 상태의 불변성을 유지하면서 데이터에 변화를 줘야 한다.
  // 이 작업을 할때 ... 연산자(spread연산자)와 함께하면 편하다.
  switch (action.type) {
    case 'TOGGLE_SWITCH':
      return {
        ...state, toggle: !state.toggle
      };

    case 'INCREASE':
      return {
        ...state, counter: action.counter + action.difference
      }

    case 'DECREASE':
      return {
        ...state, counter: action.counter - 1
      }

    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태 불러옴
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
}
render();
store.subscribe(render);

divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()));
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)));
btnDecrease.addEventListener('click', () => store.dispatch(decrease()));