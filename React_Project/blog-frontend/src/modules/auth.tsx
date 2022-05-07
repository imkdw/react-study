import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

/** changeField 액션 생성 */
interface IChangeField {
  form: string;
  key: string;
  value: string;
}

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: string) => form,
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: IChangeField): any => ({
    form, // register, login 구분
    key, // input에서 사용할 username, password, passwordConfirm
    value, // 실제로 입력되어서 변경할 값
  }),
);

/**
 * 초기 폼을 위한 액션
 * login or register가 이에 해당
 */

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }: any) =>
      produce(state, (draft: any) => {
        draft[form][key] = value;
      }),
  },
  initialState,
);

export default auth;
