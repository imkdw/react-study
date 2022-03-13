import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  width: 200px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLi = styled.li`
  width: 90px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-right: 1px solid #e5d32e;
  }

  &:last-child {
    a {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-size: 11px;
  color: #7f7519;
  display: flex;
  align-items: center;
`;

const Links = () => {
  return (
    <StyledLinkWrapper>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/register">카카오 회원가입</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/">비밀번호 재설정</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledLinkWrapper>
  );
};

export default Links;
