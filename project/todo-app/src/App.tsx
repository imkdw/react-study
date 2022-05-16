import { useCallback, useRef, useState, MouseEvent } from "react";
import GlobalStyle from "./componenets/common/GlobalStyles";
import TodoHeader from "./componenets/TodoHeader/TodoHeader";
import TodoInsert from "./componenets/TodoInsert/TodoInsert";
import TodoLists from "./componenets/TodoLists/TodoLists";
import TodoTemplate from "./componenets/TodoTemplate";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Play LostArk",
      checked: true,
    },
    {
      id: 2,
      text: "Doing Exercise",
      checked: false,
    },
    {
      id: 3,
      text: "Learn React",
      checked: false,
    },
  ]);

  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoInsert onInsert={onInsert} />
        <TodoLists todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
