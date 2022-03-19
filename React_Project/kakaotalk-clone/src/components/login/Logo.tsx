import styled from "styled-components";
import { FontawesomeSmsIcon } from "Fontawesome";

const LogoWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <FontawesomeSmsIcon width="100px" height="100px" />
    </LogoWrapper>
  );
};

export default Logo;
