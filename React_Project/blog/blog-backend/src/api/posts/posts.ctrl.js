import Post from "../../models/post";
import mongoose from 'mongoose';

// post, update 등 요청내용 검증 라이브러리
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
}

export const write = async ctx => {
  const schema = Joi.object().keys({
    /**
     * 객체가 아래 필드를 가지고 있는지 검증
     * .required() 는 필수라는 뜻
     * tags의 .items()는 배열 내 값들을 나타냄
     */
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required()
  });

  // ctx.request.body 에서 넘어온 값을 Joi로 생성한 객체로 validate 시킴.
  const result = schema.validate(ctx.request.body);

  // 만약 result에 error가 있다면 http status 400을 리턴함
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  // error가 없었다면 요청받은 데이터를 db에 저장
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title, body, tags, user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post; 12313.
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async ctx => {
  // query는 문자열이기 때문에 숫자로 변환해야함.
  // 값이 주어지지 않았다면 1을 기본값으로 사용.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts
      .map(post => ({
        ...post,
        body: post.body.lenght < 200 ? post.body : `${post.body.slice(0, 200)}...`
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204; // Success, but no data
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async ctx => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string())
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    // findByIdAndUpdate 메서드의 new 속성은 업데이트된 데이터를 반환한다는 뜻이다.
    // 만약 false로 설정할경우 업데이트 전 데이터를 반환해준다.
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, { new: true }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};