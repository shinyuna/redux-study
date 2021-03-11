import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    done: false,
  },
});

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export { addTodo, deleteTodo, toggleTodo };
