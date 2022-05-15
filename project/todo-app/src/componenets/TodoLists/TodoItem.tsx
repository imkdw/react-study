import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

const StyledTodoItem = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      flex: 1;
    }

    &.checked {
      svg {
        color: #22b8cf;
      }

      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

type todoProps = {
  todo: {
    id: number;
    text: string;
    checked: boolean;
  };
};

const TodoItem = ({ todo }: todoProps) => {
  const { text, checked } = todo;
  return (
    <StyledTodoItem>
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
