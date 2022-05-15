import { useState } from "react";
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

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoInsert />
        <TodoLists todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
