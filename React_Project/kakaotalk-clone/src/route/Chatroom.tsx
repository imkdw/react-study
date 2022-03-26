import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import Messages from "components/chatroom/Messages";
import SendMessage from "components/chatroom/SendMessage";

const Chatroom = ({ userObj }: any) => {
  const { pathname, search } = useLocation();

  // 2명의 유저 목록
  const users = search.replace("?", "").split("&");
  const [user1, user2] = [
    users[0].replace("user1=", ""),
    users[1].replace("user2=", ""),
  ];

  // 채팅방 이름
  const roomName = pathname.replace("/chatroom/", "");

  useEffect(() => {
    let isMakeRoom = true;

    const createChatRoom = async () => {
      const docSnap = await getDoc(doc(firebaseDB, "users", user2));
      const opponentInfo: any = docSnap.data();
      const { nickname, profile } = opponentInfo;

      const chatList: any[] = [];
      const chats = await getDocs(collection(firebaseDB, "chats"));
      chats.forEach((doc) => {
        chatList.push(doc.data());
      });

      chatList.forEach((chat) => {
        if (chat.roomId === roomName) {
          isMakeRoom = false;
        }
      });

      if (isMakeRoom) {
        await setDoc(doc(firebaseDB, "chats", roomName), {
          roomId: roomName,
          opponentName: nickname,
          opponentProfile: profile,
          users: [user1, user2],
          message: [
            {
              sender: "luMDO3lVBiZycfQfDUPI64o3McI3",
              time: new Date().getTime(),
              text: "테스트 메세지 1",
            },
            {
              sender: "luMDO3lVBiZycfQfDUPI64o3McI3",
              time: new Date().getTime(),
              text: "테스트 메세지 2",
            },
            {
              sender: "luMDO3lVBiZycfQfDUPI64o3McI3",
              time: new Date().getTime(),
              text: "테스트 메세지 3",
            },
          ],
        });
      }
    };

    createChatRoom();
  }, []);

  return (
    <>
      <Messages roomName={roomName} currentUser={user1} opponentUser={user2} />
      <SendMessage roomName={roomName} currentUser={user1} />
    </>
  );
};

export default Chatroom;
