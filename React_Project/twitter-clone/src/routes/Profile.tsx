import { signOut, updateProfile } from "firebase/auth";
import { auth } from "firebaseInstance";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "firebaseInstance";
import Tweet from "components/Tweet";

// TODO: Profile 컴포넌트 props 타입 지정하기
const Profile = ({ userObj, refreshUser }: any) => {
  const [myTweets, setMyTweets] = useState<any[]>([]);
  const [newDisplayName, setNewDisplayName] = useState(
    userObj.displayName ? userObj.displayName : userObj.email
  );

  useEffect(() => {
    const getMyTweets = async () => {
      const q = query(
        collection(db, "tweets"),
        where("creatorId", "==", userObj.uid)
      );
      const querySnapshot = await getDocs(q);
      const myTweetsObj = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyTweets(myTweetsObj);
    };

    getMyTweets();
  }, []);

  const onLogOutClick = async (): Promise<void> => {
    await signOut(auth);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    auth.currentUser &&
      (await updateProfile(auth.currentUser, {
        displayName: newDisplayName,
      }));
    refreshUser();
  };

  const onDisplayNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setNewDisplayName(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          onChange={onDisplayNameChange}
          value={newDisplayName}
        />
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={onLogOutClick}>Logout</button>
      <h1>My Tweets</h1>
      <div>
        {myTweets &&
          myTweets.map((tweet) => (
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

export default Profile;
