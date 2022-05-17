import { useCallback, useRef, useState, useReducer } from "react";
import GlobalStyle from "./componenets/common/GlobalStyles";
import TodoHeader from "./componenets/TodoHeader/TodoHeader";
import TodoInsert from "./componenets/TodoInsert/TodoInsert";
import TodoLists from "./componenets/TodoLists/TodoLists";
import TodoTemplate from "./componenets/TodoTemplate";

function todoReducer(todos: any, action: any) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo: any) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo: any) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App: React.FC = () => {
  const createBulkTodos = () => {
    const array = [];
    for (let i = 0; i <= 2500; i++) {
      array.push({
        id: i,
        text: `work #${i}`,
        checked: false,
      });
    }

    return array;
  };

  // const [todos, setTodos] = useState(createBulkTodos);
  /**
   * 인자 1 : reducer 함수
   * 인자 2 : 기본값
   * 인자 3(option) : 기본값이 없을경우 기본값을 생성하는 함수를 넣을 수 있다. 이때 기본값은 undefined로
   */
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      // setTodos(todos.concat(todo));
      // setTodos((todos) => todos.concat(todo)); // 함수형 업데이트로 변경
      dispatch({ type: "INSERT", todo }); // useReducer 사용
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback((id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos((todos) => todos.filter((todo) => todo.id !== id)); // 함수형 업데이트로 변경
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // ); // 함수형 업데이트로 변경
    dispatch({ type: "TOGGLE", id });
  }, []);

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
