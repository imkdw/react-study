import React, { useState, useMemo, useCallback, useRef } from "react";

const getTodoLength = (todoList: (string | number)[]) => {
  console.log("할일 갯수 세는중..");

  return todoList.length;
};

const Todo = () => {
  const [list, setList] = useState<(string | number)[]>([]);
  const [todo, setTodo] = useState("");

  // ref 생성
  const inputRef = useRef<HTMLInputElement>(null);

  // 최조 생성된 함수를 계속 사용
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  }, []);

  // list와 todo가 변경되었을 때만 함수를 재생성
  const onInsert = useCallback(() => {
    setList(list.concat(todo));
    setTodo("");
    inputRef.current?.focus();
  }, [list, todo]);

  const todoLength = useMemo(() => getTodoLength(list), [list]);

  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <b>할일 갯수 : {todoLength}</b>
    </div>
  );
};

export default Todo;
