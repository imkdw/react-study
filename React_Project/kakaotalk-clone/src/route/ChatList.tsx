import Contents from "components/common/Contents";
import AuthRouterNav from "components/AuthRouterNav";
import { useEffect, useState } from "react";
import Header from "components/chatList/Header";
import RoomList from "components/chatList/RoomList";
import { where, collection, getDoc, query, getDocs } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

interface ChatListProps {
  userObj: any;
}

const ChatList = ({ userObj }: ChatListProps) => {
  const [chatList, setChatList] = useState<any[]>([]);

  useEffect(() => {
    const getChatLists = async () => {
      const chatArray: any[] = [];
      // 1. 모든 chats를 가져온다.
      const chats = await getDocs(collection(firebaseDB, "chats"));
      chats.forEach((doc) => {
        const users = doc.data().users;
        if ([...users].includes(userObj.uid)) {
          chatArray.push(doc.data());
        }
      });

      setChatList(chatArray);
    };

    getChatLists();
  }, []);

  return (
    <>
      <Contents>
        <Header />
        <RoomList rooms={chatList} />
      </Contents>
      <AuthRouterNav />
    </>
  );
};

export default ChatList;
