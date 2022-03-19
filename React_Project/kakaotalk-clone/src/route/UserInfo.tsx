import { useParams } from "react-router-dom";
import Container from "components/common/Container";
import Header from "components/userInfo/Header";
import Profile from "components/userInfo/Profile";
import Buttons from "components/userInfo/Buttons";

const UserInfo = ({ userObj }: any) => {
  return (
    <Container bgColor="#8d949a">
      <Header />
      <Profile />
      <Buttons userObj={userObj} />
    </Container>
  );
};

export default UserInfo;
