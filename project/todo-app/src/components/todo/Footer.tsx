import styled from "styled-components";
import { theme } from "../common/GlobalStyle";

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  border-top: 2px solid ${theme.indigo[1]};
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
