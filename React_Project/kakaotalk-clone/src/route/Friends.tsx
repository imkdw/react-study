import Contents from "components/common/Contents";
import Header from "components/friends/Header";
import MyProfile from "components/friends/MyProfile";

interface FriendProps {
  userObj: any;
}

const Friends = ({ userObj }: FriendProps) => {
  const { uid } = userObj;
  return (
    <Contents>
      <Header />
      <MyProfile uid={uid} />
    </Contents>
  );
};

export default Friends;
