import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Study Context API",
      done: true,
    },
    {
      id: 2,
      text: "Study TS",
      done: true,
    },
    {
      id: 3,
      text: "Use Context API with TS",
      done: false,
    },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
