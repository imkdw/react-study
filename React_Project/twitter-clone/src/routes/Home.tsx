import { useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "firebaseInstance";
import "routes/Home.scss";
import Tweet from "components/Tweet";
import TweetFactory from "components/TweetFactory";

// TODO: Home 컴포넌트 Props type 지정하기
const Home = ({ userObj }: any) => {
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

  return (
    <>
      <TweetFactory userObj={userObj} />
      <div className="tweets">
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
