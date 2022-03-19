import { ChangeEvent, FormEvent, useEffect, useState, MouseEvent } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { FontawesomPencilIcon, FontawesomCameraIcon } from "Fontawesome";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-end;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 40%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 30px;
`;

interface InputProps {
  fontSize: string;
  fontWeight?: string;
}

const StyledInput = styled.input<InputProps>`
  width: 320px;
  height: 40px;
  background-color: transparent;
  border-bottom: 1px solid #c7c7c7;
  text-align: center;
  color: #fff;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const ImgButton = styled.button`
  width: 90px;
  height: 90px;
  position: relative;
`;

const Form = styled.form`
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  useEffect(() => {
    const getProfile = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      const docSnap = await getDoc(docRef);
      setProfile(docSnap.data());
    };

    getProfile();
  }, []);

  const [profile, setProfile] = useState<any>({});
  const [nickname, setNickname] = useState(profile.nickname);
  const [message, setMessage] = useState("");

  const params = useParams();
  const uid = String(params.uid);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const onProfileChange = (event: MouseEvent<HTMLButtonElement>) => {};

  return (
    <Wrapper>
      <ProfileWrapper>
        <ImgButton onClick={onProfileChange}>
          <Img src={profile.profile} />
        </ImgButton>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <StyledInput
              type="text"
              name="nickname"
              value={nickname}
              fontSize="15px"
              fontWeight="bold"
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="text"
              name="message"
              value={message}
              fontSize="13px"
              onChange={onChange}
            />
          </InputWrapper>
        </Form>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
