import Joi from 'joi';
import User from '../../models/user';

// POST api/auth/register
export const register = async ctx => {
  const schema = Joi.object().keys({
    /**
     * alphanum() : 숫자 또는 문자로 이루어짐
     * min(3) : 최소 3글자
     * max(20) : 최대 20글자
     * required() : 필수 요소
     */
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required()
  });

  // 클라이언트로 부터 넘어온 값이 유효한지 확인. 만약 유효하지 않다면 400에러를 리턴시킴
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
  }


  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    // 만약 존재한다면 409를 리턴
    if (exists) {
      ctx.status = 409;
      return;
    }

    // 존재하지 않으면 User 모델로 인스턴스를 생성
    const user = new User({
      username,
    });

    // setPassword 메서드로 비밀번호 원문을 해시 암호화시킴
    await user.setPassword(password);

    // DB에 저장
    await user.save();

    // data는 user 정보를 JSON화 시킨값
    const data = user.toJSON();

    // data 내부에 hashedPassword를 제거한다
    delete data.hashedPassword;

    // body에 user데이터를 JSON화 시켜서 리턴해줌
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
}

export const login = async ctx => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
  } catch (e) {
    ctx.throw(500, e);
  }
}

export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 상태 아님
    ctx.status = 401;
    return
  }

  ctx.body = user;
}

export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204;
};