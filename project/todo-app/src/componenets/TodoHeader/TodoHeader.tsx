import styled from "styled-components";

const StyledTodoHeader = styled.div`
  background-color: #22b8cf;
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoHeader = () => {
  return <StyledTodoHeader>일정 관리</StyledTodoHeader>;
};

export default TodoHeader;
