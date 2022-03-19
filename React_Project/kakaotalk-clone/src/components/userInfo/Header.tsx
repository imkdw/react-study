import styled from "styled-components";
import { FontawesomeXMarkIcon } from "Fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/friends">
        <FontawesomeXMarkIcon width="30px" height="30px" color="white" />
      </Link>
    </Wrapper>
  );
};

export default Header;
