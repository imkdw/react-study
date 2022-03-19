import styled from "styled-components";
import { FontawesomeSmsIcon } from "Fontawesome";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <FontawesomeSmsIcon width="33px" height="33px" />
      {"\u00A0"}카카오톡
    </StyledHeader>
  );
};

export default Header;
