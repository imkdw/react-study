import { useEffect, useState } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "firebaseInstance";
import { Link } from "react-router-dom";

interface ImageWrapperProps {
  width: string;
  height: string;
}

interface ImgProps {
  width: string;
  height: string;
}

const Profile = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const Friends = styled.div`
  width: 100%;
  height: 470px;
`;

const FriendsCounter = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  color: #7e7e7e;
  font-size: 11px;
  font-weight: bold;
`;

const FriendsList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 40%;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Message = styled.div`
  font-size: 11px;
  color: #b4b4b4;
`;

const StyledLink = styled(Link)``;

const UserFriends = ({ uid }: any) => {
  const [friends, setFriends] = useState<any>([]);

  useEffect(() => {
    const getFriend = async () => {
      const docRef = doc(firebaseDB, "users", uid);
      const docSnap = await getDoc(docRef);
      const userFriends = [...docSnap.data()?.friends];

      for (const userFriend of userFriends) {
        const docRef = doc(firebaseDB, "users", userFriend);
        const docSnap = await getDoc(docRef);
        const friendInfo = docSnap.data();
        setFriends((prev: any) => [friendInfo, ...prev]);
      }
    };

    getFriend();
  }, []);
  return (
    <Friends>
      <FriendsCounter>친구 {friends.length}</FriendsCounter>
      <FriendsList>
        {friends.map((friend: any) => (
          <StyledLink to={`/userinfo/${friend.uid}`} key={friend.uid}>
            <Profile>
              <ImageWrapper width="50px" height="100%">
                {friend.profile ? (
                  <StyledImg src={friend.profile} width="40px" height="40px" />
                ) : (
                  <StyledImg
                    width="40px"
                    height="40px"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z"
                  />
                )}
              </ImageWrapper>
              <InfoWrapper>
                <Nickname>{friend.nickname}</Nickname>
                <Message>{friend.message}</Message>
              </InfoWrapper>
            </Profile>
          </StyledLink>
        ))}
      </FriendsList>
    </Friends>
  );
};

export default UserFriends;
