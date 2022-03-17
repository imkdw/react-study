import styled from "styled-components";
import Button from "components/common/Button";
import { useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

const StyledHeader = styled.div`
  width: 370px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderText = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const onSearchUser = async (): Promise<void> => {
    // const docRef = doc(firebaseDB, "users", state.userId);
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap);
  };

  const headerButtonStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <StyledHeader>
      <StyledHeaderText>카카오톡 ID로 추가</StyledHeaderText>
      <Button buttonStyle={headerButtonStyle} onClick={onSearchUser}>
        확인
      </Button>
    </StyledHeader>
  );
};

export default Header;
