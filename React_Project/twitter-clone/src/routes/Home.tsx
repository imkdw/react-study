import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { db, storage } from "firebaseInstance";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import Tweet from "components/Tweet";

// TODO: Home 컴포넌트 Props type 지정하기
const Home = ({ userObj }: any) => {
  const [tweet, setTweet] = useState("");
  // TODO: tweets state 타입 지정하기
  const [tweets, setTweets] = useState<any[]>([]);
  // TODO: file 타입 지정
  const [file, setFile] = useState<any>();

  useEffect(() => {
    const q = query(collection(db, "tweets"));
    onSnapshot(q, (QuerySnapshot) => {
      const tweetObj = QuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTweets(tweetObj);
    });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    //TODO: Bucket에 이미지 업로드 기능 구현필요 22.03.12

    // await addDoc(collection(db, "tweets"), {
    //   text: tweet,
    //   createAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    // setTweet("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setTweet(value);
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const theFile = files![0];
    const reader = new FileReader();

    // readAsDataURL 에서 읽기가 완료되면 onload 이벤트가 실행된다.
    // 이미지가 blob 형태의 url로 변환됨
    // TODO: finishEvent 타입 지정
    reader.onload = (finishEvent: any) => {
      const { result } = finishEvent.target;
      setFile(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearFile = () => {
    setFile(null);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter you Tweet"
          onChange={onChange}
          value={tweet}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <button type="submit">Tweet!</button>
      </form>
      <img src={file} alt="file" width="200px" height="200px" />
      <button onClick={onClearFile}>Clear File</button>
      <div>
        {tweets &&
          tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweetObj={tweet}
              isOwner={userObj.uid === tweet.creatorId}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
