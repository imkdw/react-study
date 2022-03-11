import { signOut } from "firebase/auth";
import { auth } from "firebaseInstance";

const Profile = () => {
  const onLogOutClick = async () => {
    await signOut(auth);
  };
  return (
    <>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
