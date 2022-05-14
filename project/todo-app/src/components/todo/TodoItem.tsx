import styled from "styled-components";

const StyledTodoItem = styled.li`
  width: 100%;
  height: 50px;
  background-color: azure;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

type TodoItemProps = {
  done: boolean;
  text: string;
};

const TodoItem = ({ done, text }: TodoItemProps) => {
  return (
    <StyledTodoItem>
      {done ? <input type="checkbox" checked /> : <input type="checkbox" />}
      <div>{text}</div>
    </StyledTodoItem>
  );
};

export default TodoItem;
