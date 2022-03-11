import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { db } from "firebaseInstance";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import Tweet from "components/Tweet";

// TODO: Home 컴포넌트 Props type 지정하기
const Home = ({ userObj }: any) => {
  const [tweet, setTweet] = useState("");
  // TODO: tweets state 타입 지정하기
  const [tweets, setTweets] = useState<any[]>([]);

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
    await addDoc(collection(db, "tweets"), {
      text: tweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setTweet(value);
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
        <button type="submit">Tweet!</button>
      </form>
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
