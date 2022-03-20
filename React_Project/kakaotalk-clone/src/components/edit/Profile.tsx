import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  MouseEvent,
  useRef,
} from "react";
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

const Profile = ({ profile }: any) => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    if (profile) {
      setNickname(profile.nickname);
      setMessage(profile.message);
      setProfileUrl(profile.profile);
    }
  }, [profile]);

  const imageRef: any = useRef();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNickname(value);
  };

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const onProfileChange = (event: MouseEvent<HTMLButtonElement>) => {
    imageRef.current.click();
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageRef}
        />
        <ImgButton onClick={onProfileChange}>
          <Img src={profileUrl} />
        </ImgButton>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <StyledInput
              type="text"
              name="nickname"
              value={nickname}
              fontSize="15px"
              fontWeight="bold"
              onChange={onChangeNickname}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="text"
              name="message"
              value={message}
              fontSize="13px"
              onChange={onChangeMessage}
            />
          </InputWrapper>
        </Form>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
