import { useRecoilValue } from "recoil"
import { todoListState } from "../atom/recoil"
import TodoInsert from "./TodoInsert";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoInsert/>
      {todoList.map(todo => (
        <T
      ))}
    </>
  )
}