import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontawesomArrowLeftIcon } from "Fontawesome";
import MessageItem from "./MessageItem";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: #b2c7d9;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #a9bdce;
  display: flex;
  align-items: center;
`;

const ArrowWrapper = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OpponentName = styled.div`
  font-size: 16px;
  color: #5e676e;
  font-weight: bold;
`;

const MessageList = styled.ul`
  width: 100%;
  height: 510px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
`;

const Messages = ({ roomName, currentUser, opponentUser }: any) => {
  const [messages, setMessage] = useState<any[]>([]);
  const [opponentName, setOpponentName] = useState("");
  useEffect(() => {
    // 메세지가 변경될때마다 특정 채팅에서 메세지를 가져오는데 이를 message에다가 넣음
    const getMessages = async () => {
      onSnapshot(doc(firebaseDB, "chats", roomName), (doc) => {
        const msgs = [...doc.data()?.message];
        const msgObj = msgs.map((msg) => {
          return msg;
        });

        setMessage(msgObj);
      });
    };

    const getOpponentName = async () => {
      const opponentRef = doc(firebaseDB, "users", opponentUser);
      const opponentSnap = await getDoc(opponentRef);
      setOpponentName(opponentSnap.data()?.nickname);
    };

    getMessages();
    getOpponentName();
  }, []);
  return (
    <Wrapper>
      <Header>
        <ArrowWrapper>
          <button>
            <FontawesomArrowLeftIcon
              width="20px"
              height="20px"
              color="#5e676e"
            />
          </button>
        </ArrowWrapper>
        <OpponentName>{opponentName}</OpponentName>
      </Header>
      <MessageList>
        {messages.map((msg, index) => (
          <MessageItem
            msg={msg}
            key={index}
            currentUser={currentUser}
            opponentUser={opponentUser}
          />
        ))}
      </MessageList>
    </Wrapper>
  );
};

export default Messages;
