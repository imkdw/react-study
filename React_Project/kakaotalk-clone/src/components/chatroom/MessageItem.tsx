import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface LiProps {
  justifyContent: string;
  height: string;
}

interface SendTextProps {
  backgroundColor: string;
  marginLeft?: string;
  marginRight?: string;
}

const Li = styled.li<LiProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  gap: 5px;
  align-items: flex-end;
`;

const SendTime = styled.div`
  display: flex;
  align-items: flex-end;
  color: #404040;
  font-size: 11px;
`;

const SendText = styled.div<SendTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  font-size: 13px;
  padding: 5px;
  border-radius: 5px;
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  height: 30px;
`;

const OpponentProfile = styled.div`
  width: 40px;
  height: 40px;
`;

const OpponentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;

const OpponentName = styled.div`
  font-size: 14px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30%;
`;

const MessageItem = ({ msg, currentUser, opponentUser }: any) => {
  const { sender, time, text } = msg;
  const sendTime = `${new Date(time).getHours()}:${new Date(
    time
  ).getMinutes()}`;
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    profile: "",
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const userRef = doc(firebaseDB, "users", sender);
      const userSnap = await getDoc(userRef);
      const userObj = {
        nickname: userSnap.data()?.nickname,
        profile: userSnap.data()?.profile,
      };

      setUserInfo({
        ...userObj,
      });
    };

    getUserInfo();
  }, []);

  return (
    <>
      {sender === currentUser ? (
        <Li justifyContent="flex-end" height="40px">
          <SendTime>{sendTime}</SendTime>
          <SendText backgroundColor="#ffeb33" marginRight="10px">
            {text}
          </SendText>
        </Li>
      ) : (
        <Li justifyContent="flex-start" height="60px">
          <div
            className="wrapper"
            style={{
              display: "flex",
              marginLeft: "10px",
              gap: "8px",
            }}
          >
            <OpponentProfile>
              <Img src={userInfo.profile} />
            </OpponentProfile>
            <OpponentInfo>
              <OpponentName>{userInfo.nickname}</OpponentName>
              <SendText backgroundColor="#fff">{text}</SendText>
            </OpponentInfo>
          </div>
        </Li>
      )}
    </>
  );
};

export default MessageItem;
