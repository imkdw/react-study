import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addTodo = (text) => {
  return {
    type: ADD,
    text
  }
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  }
};

const reducer = (todos = ['Hello'], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text }, ...todos];

    case DELETE:
      return todos.filter(todo => todo.id !== action.id);

    default:
      return todos;
  }
};