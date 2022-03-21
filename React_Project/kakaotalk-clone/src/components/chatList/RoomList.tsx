import styled from "styled-components";
import RoomItem from "./RoomItem";

const Wrapper = styled.ul`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoomList = ({ rooms }: any) => {
  return (
    <Wrapper>
      {rooms.map((room: any) => (
        <RoomItem room={room} key={room.roomId} />
      ))}
    </Wrapper>
  );
};

export default RoomList;
