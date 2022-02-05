import { createAction, handleActions } from "redux-actions";

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성자 함수 - createAction 함수 사용
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState = {
  number: 0
};

// 리듀서 함수 - handleActions 함수 사용
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
);

export default counter;