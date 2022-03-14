import styled from "styled-components";

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

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
