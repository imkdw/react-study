import { doc, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { useEffect, useState } from "react";

const Messages = ({ roomName }: any) => {
  const [messages, setMessage] = useState<any[]>([]);
  useEffect(() => {
    // 메세지가 변경될때마다 특정 채팅에서 메세지를 가져오는데 이를 message에다가 넣음
    const getMessages = async () => {
      const unSub = onSnapshot(doc(firebaseDB, "chats", roomName), (doc) => {
        const msgs = [...doc.data()?.message];
        const msgObj = msgs.map((msg) => {
          return msg;
        });

        setMessage(msgObj);
        console.log(messages);
      });
    };

    getMessages();
  }, []);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <div>{message.sender}</div>
          <div>{message.timestamp}</div>
          <div>{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
