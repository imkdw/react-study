/**
 * store는 redux store instance를 반환
 * next를 호출하면 그 다음 처리해야할 미들웨어에게 액션을 넘겨주고, 만약 없다면 리듀서에게 넘겨줌
 * action은 dispatch된 액션을 반환
 */
const loggerMiddleware = store => next => action => {
  console.group(action && store.getState());
  console.log('이전 상태');
  console.log('액션 : ', action)
  next(action);
  console.log('다음 상태 : ', store.getState());
  console.groupEnd();
}

export default loggerMiddleware;
