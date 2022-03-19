import styled from "styled-components";
import Button from "components/common/Button";
import { useContext } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { AddFriendContext } from "./AddFriendContext";

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

const Header = ({ userObj }: any) => {
  const { state, actions } = useContext(AddFriendContext);
  const { userId, searchResult } = state;
  const { setSearchResult, setSearchError, setAlreadyFriend } = actions;

  const onSearchUser = async () => {
    const usersRef = collection(firebaseDB, "users");
    const q = query(usersRef, where("kakaoID", "==", userId));
    const docSnap = await getDocs(q);

    // 유저 검색결과가 없으면 searchError true로 변경해서 에러 메세지 렌더링
    if (docSnap.docs.length === 0) {
      setSearchError(true);
    } else {
      // 검색 결과가 있다면 searchResult에다가 검색데이터 할당
      const searchUser = docSnap.docs[0].data();
      const searchUserUid = searchUser.uid;
      await setSearchResult({ ...searchUser });
      // 에러 메세지가 렌더링되지 않도록 false 처리
      setSearchError(false);
      getAlreadyFriend(searchUserUid);
    }
  };

  const getAlreadyFriend = async (searchUserUid: string) => {
    const docRef = doc(firebaseDB, "users", userObj.uid);
    const docSnap = await getDoc(docRef);
    const friends = docSnap.data()?.friends;
    if ([...friends].includes(searchUserUid) || searchUserUid === userObj.uid) {
      setAlreadyFriend(true);
    } else {
      setAlreadyFriend(false);
    }
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
