import styled from "styled-components";

const StyledTodoTemplate = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const TodoTemplate = ({ children }: { children: React.ReactNode }) => {
  return <StyledTodoTemplate>{children}</StyledTodoTemplate>;
};

export default TodoTemplate;
