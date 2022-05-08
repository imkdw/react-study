import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { ChangeEvent, FormEvent } from 'react';

/** 새로운 css 속성을 위해 새로운 버튼 정의 */
const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem; ;
`;

/**
 * 회원가입 or 로그인 폼 컴포넌트
 */

const AuthFormBlock = styled.div`
  margin: 0;
  color: ${palette.gray[8]};
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

/** 폼 하단 로그인 or 회원가입 링크 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

interface IAuthFormProps {
  type: 'login' | 'register';
  form: any;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
}

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }: IAuthFormProps) => {
  console.log(form);

  const text: string = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoCapitalize="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWidthMarginTop fullWidth cyan>
          {text}
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
