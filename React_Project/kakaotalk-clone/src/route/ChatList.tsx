import Contents from "components/common/Contents";
import AuthRouterNav from "components/AuthRouterNav";
import { useEffect, useState } from "react";
import Header from "components/chatList/Header";
import RoomList from "components/chatList/RoomList";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import styled from "styled-components";

interface ChatListProps {
  userObj: any;
}

const ErrorMessage = styled.div`
  font-size: 14px;
  color: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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

      return () => {
        console.log("cleanup func");
      };
    };

    getChatLists();
  }, [userObj]);

  return (
    <>
      <Contents>
        <Header />
        <>
          {chatList.length !== 0 ? (
            <RoomList rooms={chatList} />
          ) : (
            <ErrorMessage>채팅방이 없습니다.</ErrorMessage>
          )}
        </>
      </Contents>
      <AuthRouterNav />
    </>
  );
};

export default ChatList;
