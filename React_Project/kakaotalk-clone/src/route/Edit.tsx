import Container from "components/common/Container";
import Profile from "components/edit/Profile";
import Header from "components/edit/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firebaseDB } from "firebaseInstance";
import { doc, getDoc } from "firebase/firestore";

const Edit = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getProfile = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      const docSnap = await getDoc(docRef);
      setProfile(docSnap.data());
    };

    getProfile();
  }, []);

  const params = useParams();
  const uid = String(params.uid);

  return (
    <Container bgColor="#8d949a">
      <Header />
      <Profile profile={profile} />
    </Container>
  );
};

export default Edit;
