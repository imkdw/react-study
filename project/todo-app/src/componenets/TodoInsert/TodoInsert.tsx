import { useCallback, useState, ChangeEvent, FormEvent } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const StyledTodoInsert = styled.form`
  display: flex;
  background-color: #495057;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }

    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background-color: #868e96;
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;

    &:hover {
      background-color: #adb5bd;
    }
  }
`;

type TodoInsertProps = {
  onInsert: (text: string) => void;
};
const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <StyledTodoInsert onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <button>
        <MdAdd />
      </button>
    </StyledTodoInsert>
  );
};

export default TodoInsert;
