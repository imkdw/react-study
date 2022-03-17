import Header from "components/friends/Header";
import InputUserId from "./InputUserId";
import Profile from "./Profile";
import { AddFriendProvider } from "./AddFriendContext";

const AddFriend = () => {
  <div>
    <AddFriendProvider>
      <Header />
      <InputUserId />
      <Profile />
    </AddFriendProvider>
  </div>;
};

export default AddFriend;
