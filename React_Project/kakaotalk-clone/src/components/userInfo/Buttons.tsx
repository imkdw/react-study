import styled from "styled-components";
import { FontawesomeCommentIcon, FontawesomEditIcon } from "Fontawesome";
import { Link, useParams } from "react-router-dom";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatButtonWrapper = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonText = styled.div`
  font-size: 11px;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  width: 50px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = ({ userObj }: any) => {
  const params = useParams();
  const uid = String(params.uid);
  const navigate = useNavigate();

  const onStartChat = async () => {
    const chatRooms: any[] = [];
    const roomName = v4();
    const [user1, user2] = [userObj.uid, uid];
    let roomId;

    const chats = await getDocs(collection(firebaseDB, "chats"));
    chats.forEach((doc) => {
      chatRooms.push(doc.data());
    });

    chatRooms.forEach((chat) => {
      const users = [...chat.users];
      // 만약 유저1, 유저2 가 모두 속한 채팅방이 있다면 roomId를 저장함.
      if (users.includes(user1) && users.includes(user2)) {
        roomId = chat.roomId;
      }
    });

    // 채팅방이 없거나 기존에 사용하던 채팅방이 없는경우 새로 만듬
    if (chatRooms.length === 0 || roomId === undefined) {
      navigate(`/chatroom/${roomName}?user1=${user1}&user2=${user2}`);
    } else {
      navigate(`/chatroom/${roomId}?user1=${user1}&user2=${user2}`);
    }
  };

  return (
    <Wrapper>
      <ChatButtonWrapper>
        {userObj.uid === uid ? (
          <>
            <Link to={`/edit/${uid}`}>
              <FontawesomEditIcon width="20px" height="20px" color="#fff" />
            </Link>
            <ButtonText>프로필 수정</ButtonText>
          </>
        ) : (
          <ButtonWrapper onClick={onStartChat}>
            <button>
              <FontawesomeCommentIcon width="20px" height="20px" color="#fff" />
            </button>
            <ButtonText>1:1 채팅</ButtonText>
          </ButtonWrapper>
        )}
      </ChatButtonWrapper>
    </Wrapper>
  );
};

export default Buttons;
