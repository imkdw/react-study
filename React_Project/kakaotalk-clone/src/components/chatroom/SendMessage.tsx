import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: red;
`;

const SendMessage = () => {
  return (
    <>
      <input type="text" />
      <button>보내기</button>
    </>
  );
};

export default SendMessage;
