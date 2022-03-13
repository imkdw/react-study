import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLi = styled.li`
  width: 133px;
  height: 100%;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 50px;
  background-color: #f9f9f9;
  display: flex;
  position: absolute;
  bottom: 0;
`;

const AuthRouterNav = () => {
  return (
    <StyledUl>
      <StyledLi>
        <Link to="/friends">friends</Link>
      </StyledLi>
      <StyledLi>
        <Link to="/chatlist">chatlist</Link>
      </StyledLi>
      <StyledLi>
        <Link to="/notice">notice</Link>
      </StyledLi>
    </StyledUl>
  );
};

export default AuthRouterNav;
