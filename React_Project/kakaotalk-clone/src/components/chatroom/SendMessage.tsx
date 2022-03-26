import styled from "styled-components";
import { useState, ChangeEvent, FormEvent } from "react";
import { FontawesomPlayIcon } from "Fontawesome";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const Form = styled.form`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const Input = styled.input`
  width: 350px;
  height: 100%;
  padding-left: 15px;
`;

const Button = styled.button`
  width: 50px;
  height: 100%;
  background-color: #fde500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendMessage = ({ roomName, currentUser }: any) => {
  const [text, setText] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setText(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const msgObj = {
      sender: currentUser,
      text: text,
      time: new Date().getTime(),
    };

    const msgRef = doc(firebaseDB, "chats", roomName);
    await updateDoc(msgRef, {
      message: arrayUnion(msgObj),
    });

    setText("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="메세지를 입력해주세요."
      />
      <Button type="submit">
        <FontawesomPlayIcon width="25px" height="25px" color="#191919" />
      </Button>
    </Form>
  );
};

export default SendMessage;
