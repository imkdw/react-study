import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-end;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 40%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 370px;
  height: 30px;
`;

const StyledInput = styled.input`
  width: 370px;
  height: 30px;
  background-color: transparent;
  border-bottom: 1px solid #c7c7c7;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const Profile = () => {
  const [profile, setProfile] = useState<any>({});

  const params = useParams();
  const uid = String(params.uid);

  useEffect(() => {
    const getProfile = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      const docSnap = await getDoc(docRef);
      setProfile(docSnap.data());
    };

    getProfile();
  }, []);

  return (
    <Wrapper>
      <ProfileWrapper>
        <Img src={profile.profile} />
        <InputWrapper>
          <StyledInput value={profile.nickname} />
        </InputWrapper>
        <InputWrapper>
          <StyledInput value={profile.message} />
        </InputWrapper>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
