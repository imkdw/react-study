import Header from "./Header/Header";
import Footer from "./Footer";
import TodoList from "./TodoList";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 400px;
  height: 600px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Container = () => {
  return (
    <StyledContainer>
      <Header />
      <TodoList />
      <Footer />
    </StyledContainer>
  );
};

export default Container;
