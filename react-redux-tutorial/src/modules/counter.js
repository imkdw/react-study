/**
 * 액선 타입 정의하기
 * 1. 액션 타입은 대문자로, 문자열 내용은 "모듈이름/액션이름" 형태로 정의하기
 * 2. 모듈 이름을 앞에 붙임으로서 프로젝트가 커졌을때 중복을 방지할 수 있음
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * 액션 생성 함수 만들기
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/**
 * 초기 상태 및 리듀서 만들기
 */
const initialState = {
  number: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      }

    case DECREASE:
      return {
        number: state.number - 1
      }

    default:
      return state;
  }
}

export default counter;
