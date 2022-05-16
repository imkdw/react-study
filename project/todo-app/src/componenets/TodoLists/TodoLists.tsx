import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledTodoLists = styled.ul`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  background-color: #fff;
`;

type todosProps = {
  todos: {
    id: number;
    text: string;
    checked: boolean;
  }[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoLists = ({ todos, onRemove, onToggle }: todosProps) => {
  return (
    <StyledTodoLists>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
