import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontawesomArrowLeftIcon } from "Fontawesome";
import { useContext } from "react";
import { EditContext } from "./EditContext";
import { doc, updateDoc } from "firebase/firestore";
import { firebaseDB, firebaseStorage } from "firebaseInstance";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Wrapper = styled.div`
  width: 370px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const Header = ({ profile }: any) => {
  const context = useContext(EditContext);
  const { state, actions } = context;
  const { nickname, message, profileUrl } = state;
  // const { setNickname, setMessage, setProfileUrl } = actions;

  const navigate = useNavigate();

  const onUpdateProfile = async (): Promise<void> => {
    // Firestore 사진 업로드 로직
    const storageRef = ref(firebaseStorage, `${profile.uid}/profile.png`);
    await uploadString(storageRef, profileUrl, "data_url");
    const downloadUrl = await getDownloadURL(storageRef);

    // DB 업데이트 로직
    const userRef = doc(firebaseDB, "users", profile.uid);
    await updateDoc(userRef, {
      nickname: nickname,
      message: message,
      profile: downloadUrl,
    });
    navigate(-1);
  };

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>
        <FontawesomArrowLeftIcon width="20px" height="20px" color="#fff" />
      </button>
      <Button onClick={onUpdateProfile}>완료</Button>
    </Wrapper>
  );
};

export default Header;
