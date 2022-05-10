import React, { ChangeEvent, useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="무엇을 하실건가요?"
        onChange={onChange}
      />
    </form>
  );
}

export default TodoForm;
