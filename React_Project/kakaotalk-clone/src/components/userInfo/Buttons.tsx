import styled from "styled-components";
import { FontawesomeCommentIcon, FontawesomEditIcon } from "Fontawesome";
import { Link, useParams } from "react-router-dom";

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

const Buttons = ({ userObj }: any) => {
  const params = useParams();
  const uid = String(params.uid);

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
          <>
            <button>
              <FontawesomeCommentIcon width="20px" height="20px" color="#fff" />
            </button>
            <ButtonText>1:1 채팅</ButtonText>
          </>
        )}
      </ChatButtonWrapper>
    </Wrapper>
  );
};

export default Buttons;
