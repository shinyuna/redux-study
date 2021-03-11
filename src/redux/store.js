import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const onChange = () => {
  const state = store.getState();
  localStorage.setItem('ToDos', JSON.stringify(state));
};
store.subscribe(onChange);

export default store;
