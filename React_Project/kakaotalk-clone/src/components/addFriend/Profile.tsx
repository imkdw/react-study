import styled from "styled-components";
import Button from "components/common/Button";
import { useContext, MouseEvent } from "react";
import { AddFriendContext } from "./AddFriendContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";

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
  border-radius: 18px;
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

const StyledErrorMessage = styled.div`
  font-size: 14px;
  color: lightgray;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = ({ userObj }: any) => {
  const { state, actions } = useContext(AddFriendContext);
  const { searchResult } = state;
  const { setAlreadyFriend } = actions;
  const { message, nickname, profile } = state.searchResult;

  const onClick = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const { textContent } = event.currentTarget;
    if (textContent === "1:1 채팅") {
      console.log("1:1 채팅");
    } else if (textContent === "친구추가") {
      const loggedInUserRef = doc(firebaseDB, "users", userObj.uid);

      await updateDoc(loggedInUserRef, {
        friends: arrayUnion(searchResult.uid),
      });

      setAlreadyFriend(true);
    }
  };

  const addButtonStyle = {
    width: "80px",
    height: "30px",
    fontSize: "12px",
    backgroundColor: "#fde500",
    borderRadius: "5px",
  };

  return (
    <>
      {state.searchError ? (
        <StyledErrorMessage>검색 결과가 없습니다.</StyledErrorMessage>
      ) : (
        <>
          {state.searchResult && (
            <StyledProfileWrapper>
              <StyledProfile>
                <StyledProfileImage src={profile} />
                <StyledInfoWrapper>
                  <StyleNickname>{nickname}</StyleNickname>
                  <StyledMessage>{message}</StyledMessage>
                </StyledInfoWrapper>
                <StyledButtonWrapper>
                  <Button buttonStyle={addButtonStyle} onClick={onClick}>
                    {state.alreadyFriend ? "1:1 채팅" : "친구추가"}
                  </Button>
                </StyledButtonWrapper>
              </StyledProfile>
            </StyledProfileWrapper>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
