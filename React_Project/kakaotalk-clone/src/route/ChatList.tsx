import Contents from "components/common/Contents";
import AuthRouterNav from "components/AuthRouterNav";

interface ChatListProps {
  userObj: any;
}

const ChatList = ({ userObj }: ChatListProps) => {
  return (
    <>
      <Contents>
        <div>chatlist</div>
      </Contents>
      <AuthRouterNav />
    </>
  );
};

export default ChatList;
