/**
 * 미들웨어는 함수를 반환하는 함수이다.
 * store : 리덕스 스토어 인스턴스를 가르킨다.
 * action : 디스패치된 액션을 가르킨다.
 * next : next 호출 시 다음 미들웨어에게 액션을 넘겨주고, 호출하지 않으면 리듀서에게 액션을 넘겨줌
 *
 */
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log(`이전 상태 : ${JSON.stringify(store.getState())}`);
  console.log("액션 : ", action);
  next(action);
  console.log(`다음 상태 : ${JSON.stringify(store.getState())}`);
  console.groupEnd();
};

export default loggerMiddleware;
