import mongoose from 'mongoose';

const { Schema } = mongoose;

// Schema 생성시 mongoose 모듈의 Schema를 사용해서 작성
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: { // 작성일
    type: Date,
    default: Date.now, // 기본값을 지금 날짜로
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String
  }
});

// 모델 생성시 mongoose.model 함수를 사용.

/**
 * mongoose.model('스키마 이름', '스키마 객체')
 * 스키마 이름을 Post라고 지정시 실제 컬렉션 이름은 posts 이다.
 */
const Post = mongoose.model('Post', PostSchema);
export default Post;