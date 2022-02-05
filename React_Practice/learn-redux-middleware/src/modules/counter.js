import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'countet/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increastAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreastAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);



export default counter;


