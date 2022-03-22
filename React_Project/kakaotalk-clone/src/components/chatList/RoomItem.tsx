import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`;

const OpponentProfileWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const OpponentProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const RoomInfoWrapper = styled.div`
  width: 270px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OpponentName = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
`;

const RoomMessage = styled.div`
  font-size: 12px;
  color: #959595;
`;

const RoomItem = ({ room }: any) => {
  const navigate = useNavigate();

  const onMoveChatroom = () => {
    navigate(
      `/chatroom/${room.roomId}?user1=${room.users[0]}&user2=${room.users[1]}`
    );
  };

  return (
    <Li onClick={onMoveChatroom}>
      <OpponentProfileWrapper>
        <OpponentProfile src={room.opponentProfile} />
      </OpponentProfileWrapper>
      <RoomInfoWrapper>
        <OpponentName>{room.opponentName}</OpponentName>
        <RoomMessage>임시 메세지</RoomMessage>
      </RoomInfoWrapper>
    </Li>
  );
};

export default RoomItem;
