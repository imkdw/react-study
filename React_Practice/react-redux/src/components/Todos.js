import { useRef } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      >{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input, todos, onChangeInput, onInsert, onToggle, onRemove
}) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    onInsert(input);
    onChangeInput('');
    inputRef.current.focus();
  };

  const onChange = (event) => {
    onChangeInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} ref={inputRef} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
};

export default Todos;