import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontawesomArrowLeftIcon } from "Fontawesome";

const Wrapper = styled.div`
  width: 370px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>
        <FontawesomArrowLeftIcon width="20px" height="20px" color="#fff" />
      </button>
      <Button>완료</Button>
    </Wrapper>
  );
};

export default Header;
