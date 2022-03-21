import Contents from "components/common/Contents";
import Header from "components/friends/Header";
import MyProfile from "components/friends/MyProfile";
import UserFriends from "components/friends/UserFriends";
import AuthRouterNav from "components/AuthRouterNav";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

interface FriendProps {
  userObj: any;
}

const Friends = ({ userObj }: FriendProps) => {
  const [myProfile, setMyProfile] = useState<any>({});
  const [userFriends, setUserFriends] = useState<any>([]);

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      try {
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        const userObj = {
          nickname: userData?.nickname,
          message: userData?.message,
          profile: userData?.profile,
          uid: userData?.uid,
        };
        setMyProfile(userObj);
      } catch (error: any) {
        console.error(error);
      }
    };

    const getFriend = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      const docSnap = await getDoc(docRef);
      const userFriends = [...docSnap.data()?.friends];
      const friends: any[] = [];

      for (const userFriend of userFriends) {
        const docRef = doc(firebaseDB, "users", userFriend);
        const docSnap = await getDoc(docRef);
        const friendInfo = docSnap.data();
        friends.push(friendInfo);
      }

      setUserFriends(friends);
    };

    getUser();
    getFriend();
  }, []);

  const { uid } = userObj;
  return (
    <>
      <Contents>
        <Header />
        <MyProfile myProfile={myProfile} />
        <UserFriends userFriends={userFriends} />
      </Contents>
      <AuthRouterNav />
    </>
  );
};

export default Friends;
