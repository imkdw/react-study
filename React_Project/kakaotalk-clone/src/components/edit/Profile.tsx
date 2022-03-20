import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import styled from "styled-components";
import { EditContext } from "./EditContext";

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
  const context = useContext(EditContext);
  const { state, actions } = context;
  const { nickname, message, profileUrl } = state;
  const { setNickname, setMessage, setProfileUrl } = actions;

  useEffect(() => {
    if (profile) {
      setNickname(profile.nickname);
      setMessage(profile.message);
      setProfileUrl(profile.profile);
    }
  }, [profile]);

  const fileInputRef: any = useRef();

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

  const onClick = () => {
    fileInputRef.current.click();
  };

  const onProfileChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file: FileList | null = event.currentTarget.files;
    if (file !== null) {
      if (!file[0].type.match("image/*")) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      }

      const theFile = file[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e: any) => {
        const { result } = e.target;
        setProfileUrl(result);
      });
      reader.readAsDataURL(theFile);
    }
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={onProfileChange}
        />
        <ImgButton onClick={onClick}>
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
