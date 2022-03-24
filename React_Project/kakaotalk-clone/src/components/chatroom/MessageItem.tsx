import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  height: 35px;
  background-color: aqua;
  display: flex;
`;

const MessageItem = ({ msg, currentUser }: any) => {
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    profile: "",
  });

  console.log(msg);

  useEffect(() => {
    const getUser = async () => {
      const userRef = doc(firebaseDB, "users", currentUser);
      const userSnap = await getDoc(userRef);
      const userObj = {
        nickname: userSnap.data()?.nickname,
        profile: userSnap.data()?.profile,
      };
      setUserInfo(userObj);
    };

    getUser();
  }, []);

  return (
    <Li>
      <div>{msg.time}</div>
      <div>{msg.text}</div>
    </Li>
  );
};

export default MessageItem;
