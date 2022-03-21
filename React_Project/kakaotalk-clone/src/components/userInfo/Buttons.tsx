import styled from "styled-components";
import { FontawesomeCommentIcon, FontawesomEditIcon } from "Fontawesome";
import { Link, useParams } from "react-router-dom";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

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

  const onStartChat = () => {
    const roomName = v4();
    const [user1, user2] = [userObj.uid, uid];
    navigate(`/chatroom/${roomName}?user1=${user1}&user2=${user2}`);
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
