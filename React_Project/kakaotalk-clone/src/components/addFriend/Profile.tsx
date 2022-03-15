import styled from "styled-components";
import Button from "components/common/Button";

const StyledProfileWrapper = styled.div`
  width: 370px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

const StyledProfile = styled.div`
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 25px;
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

const StyleNickname = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const StyledMessage = styled.div`
  font-size: 11px;
  color: #b4b4b4;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
`;

const Profile = () => {
  const addButtonStyle = {
    width: "80px",
    height: "30px",
    fontSize: "12px",
    backgroundColor: "#fde500",
    borderRadius: "8px",
  };

  return (
    <>
      <StyledProfileWrapper>
        <StyledProfile>
          <StyledProfileImage src="https://firebasestorage.googleapis.com/v0/b/kakaotalk-clone-beed5.appspot.com/o/profile.png?alt=media&token=1e2f2a43-a70c-46a8-aa33-9a3d8ab45e5f" />
          <StyledInfoWrapper>
            <StyleNickname>닉네임</StyleNickname>
            <StyledMessage>상태메세지 입니다.</StyledMessage>
          </StyledInfoWrapper>
          <StyledButtonWrapper>
            <Button buttonStyle={addButtonStyle}>1:1 채팅</Button>
          </StyledButtonWrapper>
        </StyledProfile>
      </StyledProfileWrapper>
    </>
  );
};

export default Profile;
