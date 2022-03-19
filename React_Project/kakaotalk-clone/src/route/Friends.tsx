import Contents from "components/common/Contents";
import Header from "components/friends/Header";
import MyProfile from "components/friends/MyProfile";
import UserFriends from "components/friends/UserFriends";
import AuthRouterNav from "components/AuthRouterNav";

interface FriendProps {
  userObj: any;
}

const Friends = ({ userObj }: FriendProps) => {
  const { uid } = userObj;
  return (
    <>
      <Contents>
        <Header />
        <MyProfile uid={uid} />
        <UserFriends uid={uid} />
      </Contents>
      <AuthRouterNav />
    </>
  );
};

export default Friends;
