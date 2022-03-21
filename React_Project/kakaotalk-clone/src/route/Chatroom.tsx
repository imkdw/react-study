import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const Chatroom = () => {
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
    const createChatRoom = async () => {
      const docSnap = await getDoc(doc(firebaseDB, "users", user2));
      const opponentInfo: any = docSnap.data();
      const { nickname, profile } = opponentInfo;

      await setDoc(doc(firebaseDB, "chats", roomName), {
        roomId: roomName,
        opponentName: nickname,
        opponentProfile: profile,
        users: [user1, user2],
        message: [],
      });
    };

    createChatRoom();
  }, []);

  return <div>Chatroom</div>;
};

export default Chatroom;
