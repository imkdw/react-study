import styled from "styled-components";

const MsgWrapper = styled.div`
  width: 100%;
  height: 60px;
  text-align: right;
`;

const Msg = styled.span`
  color: #a0a0a0;
  font-size: 12px;
  padding: 5px 5px 0 0;
`;

const Message = () => {
  return (
    <MsgWrapper>
      <Msg>Made by. 초보군붕이</Msg>
    </MsgWrapper>
  );
};

export default Message;
