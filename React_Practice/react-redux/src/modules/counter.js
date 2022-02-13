import { createAction, handleActions } from "redux-actions";

// 액션 타입을 정의. 문자열로도 사용이 가능하지만 실수를 대비해서 변수에 저장하면 좋디.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션을 생성하는 함수를 정의한다. 이는 추후에 다른 파일에서 불러와서 사용이 가능하다.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction을 사용한 액션 함수 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0
};

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };

//     case DECREASE:
//       return { number: state.number - 1 };

//     default:
//       return state;
//   }
// }

// handleActions를 이용한 switch/case 문 대체
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
);

export default counter;