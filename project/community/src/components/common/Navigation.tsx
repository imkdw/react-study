import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkWrapper = styled.div`
  background-color: #20232a;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 100px;
  color: #fff;
  font-size: 20px;
`;

const Navigation = () => {
  return (
    <>
      <StyledLinkWrapper>
        <StyledLink to="login">로그인</StyledLink>
        <StyledLink to="register">회원가입</StyledLink>
      </StyledLinkWrapper>
    </>
  );
};

export default Navigation;
