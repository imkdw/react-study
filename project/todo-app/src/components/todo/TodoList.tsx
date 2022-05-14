import styled from "styled-components";
import { theme } from "../common/GlobalStyle";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.ul`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: "Play LostArk",
      done: true,
    },
    {
      id: 2,
      text: "Doing Exercise",
      done: false,
    },
    {
      id: 3,
      text: "Study React & NodeJS",
      done: false,
    },
  ];

  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} done={todo.done} text={todo.text} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
