import { useEffect } from 'react';

/**
 * useDispatch : action 발생
 * useSelector : state 접근
 */

import { useDispatch, useSelector } from 'react-redux';
import auth, { changeField, initializeForm } from '../../modules/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ form }) => ({
    form: auth.login,
  }));
};
