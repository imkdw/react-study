import Header from "components/addFriend/Header";
import InputUserId from "components/addFriend/InputUserId";
import Profile from "components/addFriend/Profile";
import { AddFriendProvider } from "components/addFriend/AddFriendContext";

const AddFriend = ({ userObj }: any) => {
  return (
    <AddFriendProvider>
      <Header userObj={userObj} />
      <InputUserId />
      <Profile userObj={userObj} />
    </AddFriendProvider>
  );
};

export default AddFriend;
