import styled from "styled-components";
import { FontawesomeSearchIcon } from "Fontawesome";

const StyledHeader = styled.div`
  width: 100%;
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

const StyledIconWrapper = styled.ul`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledLi = styled.li`
  width: 20px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderText>채팅</StyledHeaderText>
      <StyledIconWrapper>
        <StyledLi>
          <FontawesomeSearchIcon width="20px" height="20px" />
        </StyledLi>
      </StyledIconWrapper>
    </StyledHeader>
  );
};

export default Header;
