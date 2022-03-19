import { useParams } from "react-router-dom";
import Container from "components/common/Container";
import Profile from "components/edit/Profile";
import Header from "components/edit/Header";
import Buttons from "components/edit/Buttons";

const Edit = () => {
  const params = useParams();
  const uid = params.uid;

  return (
    <Container bgColor="#8d949a">
      <Header />
      <Profile />
      <Buttons />
    </Container>
  );
};

export default Edit;
