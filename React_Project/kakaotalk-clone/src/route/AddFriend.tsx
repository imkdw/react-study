import styled from "styled-components";

interface StyleButtonProps {
  width?: string;
  height?: string;
  fontSize: string;
  isBold?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
}

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

const StyledButton = styled.button<StyleButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.isBold ? "bold" : "none")};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;

const StyledInputWrapper = styled.div`
  width: 370px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-bottom: 2px solid lightgray;
  padding-left: 10px;
  font-weight: bold;

  &:focus {
    border-bottom: 2px solid black;
  }

  &::placeholder {
    opacity: 0.7;
  }
`;

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

const AddFriend = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderText>카카오톡 ID로 추가</StyledHeaderText>
        <StyledButton fontSize="16px" isBold>
          확인
        </StyledButton>
      </StyledHeader>
      <StyledInputWrapper>
        <StyledInput placeholder="카카오톡 아이디를 입력해주세요." />
      </StyledInputWrapper>
      <StyledProfileWrapper>
        <StyledProfile>
          <StyledProfileImage src="https://firebasestorage.googleapis.com/v0/b/kakaotalk-clone-beed5.appspot.com/o/profile.png?alt=media&token=1e2f2a43-a70c-46a8-aa33-9a3d8ab45e5f" />
          <StyledInfoWrapper>
            <StyleNickname>닉네임</StyleNickname>
            <StyledMessage>상태메세지 입니다.</StyledMessage>
          </StyledInfoWrapper>
          <StyledButtonWrapper>
            <StyledButton
              width="80px"
              height="30px"
              fontSize="12px"
              backgroundColor="#fde500"
              borderRadius="px"
            >
              1:1 채팅
            </StyledButton>
          </StyledButtonWrapper>
        </StyledProfile>
      </StyledProfileWrapper>
    </>
  );
};

export default AddFriend;
