import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

const initialState = JSON.parse(localStorage.getItem('ToDos')) || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, { ...action.payload }];
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(todo => todo.id !== id);
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const item = state.find(todo => todo.id === id);
      return [...state.filter(todo => todo.id !== item.id), { ...item, done: !item.done }];
    }
    default:
      return state;
  }
};

export default reducer;
