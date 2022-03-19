import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  border-bottom: 2px solid #a6abb0;
  display: flex;
  align-items: flex-end;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 130px;
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

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

const Message = styled.div`
  font-size: 12px;
  color: #fff;
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
        <Name>{profile.nickname}</Name>
        {profile.message && <Message>{profile.message}</Message>}
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
